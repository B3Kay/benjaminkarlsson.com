export type Categories = 'business' | 'booksummary'


export type Post = {
    title: string
    slug: string
    date: string
    description: string
    categories: Categories[]
    published: boolean
}