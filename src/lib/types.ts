export type Categories = '🤑business' | '📕booksummary'


export type Post = {
    title: string
    slug: string
    date: string
    description: string
    categories: Categories[]
    published: boolean
    rating: number
}

export type Project = {
    title: string
    slug: string
    date: string
    imageUrl: string
    description: string
    categories: Categories[]
    published: boolean
    rating: number
}
