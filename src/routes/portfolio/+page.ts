import type { Project } from '$lib/types.js'

export async function load({ fetch }) {
    const response = await fetch('api/portfolio')

    const portfolio: Project[] = await response.json()
    return { portfolio }
}