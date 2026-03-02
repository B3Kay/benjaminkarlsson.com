import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

const XAI_API_URL = 'https://api.x.ai/v1/chat/completions';
const MODEL = 'grok-2-fast';
const STORE_NAME = 'chat-wall';
const HIGHLIGHTS_KEY = 'highlights';
const MAX_WALL_ITEMS = 30;

export type WallHighlight = {
	id: string;
	snippet: string;
	emoji: string;
	timestamp: number;
};

const CONTENT_FILTER_WORDS = [
	'fuck', 'shit', 'ass', 'dick', 'porn', 'sex', 'nude', 'kill',
	'hate', 'racist', 'nazi', 'slur', 'n-word', 'faggot', 'retard',
];

function isCleanContent(text: string): boolean {
	const lower = text.toLowerCase();
	return !CONTENT_FILTER_WORDS.some((word) => lower.includes(word));
}

// --- Netlify Blobs via REST API (edge-compatible) ---

function getBlobUrl(key: string): string {
	const siteId = process.env.SITE_ID || '';
	const token = process.env.NETLIFY_BLOBS_TOKEN || process.env.NETLIFY_API_TOKEN || '';
	// In Netlify's runtime, these env vars are auto-injected
	const apiUrl = process.env.NETLIFY_BLOBS_CONTEXT || `https://api.netlify.com/api/v1/blobs/${siteId}/store/${STORE_NAME}`;
	return `${apiUrl}/${key}`;
}

function getBlobHeaders(): Record<string, string> {
	const token = process.env.NETLIFY_BLOBS_TOKEN || process.env.NETLIFY_API_TOKEN || '';
	return {
		'Authorization': `Bearer ${token}`,
		'Content-Type': 'application/json',
	};
}

async function getBlob(key: string): Promise<string | null> {
	try {
		const res = await fetch(getBlobUrl(key), { headers: getBlobHeaders() });
		if (!res.ok) return null;
		return await res.text();
	} catch {
		return null;
	}
}

async function setBlob(key: string, value: string): Promise<void> {
	try {
		await fetch(getBlobUrl(key), {
			method: 'PUT',
			headers: getBlobHeaders(),
			body: value,
		});
	} catch (err) {
		console.error('Blob write error:', err);
	}
}

// GET — Return all highlights for the wall
export const GET: RequestHandler = async () => {
	try {
		const raw = await getBlob(HIGHLIGHTS_KEY);
		const highlights: WallHighlight[] = raw ? JSON.parse(raw) : [];
		return json({ highlights });
	} catch (err) {
		console.error('Wall GET error:', err);
		return json({ highlights: [] });
	}
};

// POST — Submit a conversation for highlight extraction
export const POST: RequestHandler = async ({ request }) => {
	const apiKey = process.env.XAI_API_KEY;
	if (!apiKey) {
		return json({ error: 'Not configured' }, { status: 503 });
	}

	let body: { messages?: Array<{ role: string; content: string }> };
	try {
		body = await request.json();
	} catch {
		return json({ error: 'Invalid body' }, { status: 400 });
	}

	const { messages } = body;
	if (!messages || !Array.isArray(messages) || messages.length < 2) {
		return json({ error: 'Need at least one exchange' }, { status: 400 });
	}

	// Format conversation for the curator LLM
	const conversationText = messages
		.map((m) => `${m.role === 'user' ? 'Visitor' : 'AI'}: ${m.content}`)
		.join('\n');

	try {
		const response = await fetch(XAI_API_URL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${apiKey}`,
			},
			body: JSON.stringify({
				model: MODEL,
				messages: [
					{
						role: 'system',
						content: `You are a curator for a "Chat Hall of Fame" wall on a developer's portfolio website. You review conversations between visitors and an AI chatbot and decide if anything is wall-worthy.

## Your job:
1. Read the conversation below
2. Decide if there's a funny, interesting, wholesome, or memorable moment worth displaying
3. If YES: Extract a SHORT snippet (max 80 characters) that captures the moment. This should be entertaining to read on a scrolling wall. It can be the visitor's question, the AI's witty response, or a paraphrased summary.
4. Pick a single emoji that fits the vibe
5. If NO: The conversation was too boring or generic

## Rules:
- REJECT anything inappropriate, offensive, or containing personal information
- REJECT generic/boring exchanges ("What skills do you have?" is not wall-worthy)
- PREFER funny questions, unexpected topics, clever wordplay, or wholesome moments
- The snippet should make someone smile when they read it on the wall
- Keep it anonymous — never include names, emails, or identifying info

## Response format (JSON only, no other text):
If wall-worthy: {"worthy": true, "snippet": "the funny/interesting line", "emoji": "🎯"}
If not worthy: {"worthy": false}`,
					},
					{
						role: 'user',
						content: `Here's the conversation:\n\n${conversationText}`,
					},
				],
				max_tokens: 150,
				temperature: 0.7,
			}),
		});

		if (!response.ok) {
			return json({ saved: false });
		}

		const data = await response.json();
		const content = data.choices?.[0]?.message?.content?.trim();

		if (!content) {
			return json({ saved: false });
		}

		// Parse the LLM's JSON response
		let result: { worthy: boolean; snippet?: string; emoji?: string };
		try {
			const cleaned = content.replace(/```json\n?|\n?```/g, '').trim();
			result = JSON.parse(cleaned);
		} catch {
			return json({ saved: false });
		}

		if (!result.worthy || !result.snippet || !result.emoji) {
			return json({ saved: false });
		}

		// Content filter the snippet
		if (!isCleanContent(result.snippet)) {
			return json({ saved: false });
		}

		const snippet = result.snippet.slice(0, 80);
		const emoji = result.emoji.slice(0, 4);

		// Save to blob store
		const raw = await getBlob(HIGHLIGHTS_KEY);
		const highlights: WallHighlight[] = raw ? JSON.parse(raw) : [];

		const newHighlight: WallHighlight = {
			id: crypto.randomUUID(),
			snippet,
			emoji,
			timestamp: Date.now(),
		};

		highlights.unshift(newHighlight);
		const trimmed = highlights.slice(0, MAX_WALL_ITEMS);
		await setBlob(HIGHLIGHTS_KEY, JSON.stringify(trimmed));

		return json({ saved: true, highlight: newHighlight });
	} catch (err) {
		console.error('Wall POST error:', err);
		return json({ saved: false });
	}
};
