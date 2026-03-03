import type { Post, Project } from '$lib/types';

export const prerender = false;

export async function load({ fetch }) {
	const [postsRes, portfolioRes] = await Promise.all([
		fetch('/api/posts'),
		fetch('/api/portfolio')
	]);

	const posts: Post[] = await postsRes.json();
	const portfolio: Project[] = await portfolioRes.json();

	return {
		featuredPosts: posts.slice(0, 3),
		featuredProjects: portfolio.slice(0, 3)
	};
}
