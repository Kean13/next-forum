import { getPostById } from '@/lib/db/posts'
import { notFound } from 'next/navigation'

interface Post {
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

interface PostItem {
	params: {
		postId: number
	}
}

export default async function PostPage({ params }: PostItem) {
	const post: Post | null = await getPostById(params.postId)

	if (!post) {
		notFound()
	}

	return (
		<>
			<div>Пост найден: {post.title}</div>
		</>
	)
}
