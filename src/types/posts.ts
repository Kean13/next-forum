export interface Post {
	id: number
	authorId: number
	title: string
	content: string
	createdAt: Date
	category: string
	likes: number
	replies: string[]
	tags: string[]
}
