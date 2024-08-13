import Post from '@/components/layout/Homepage/Posts/Post'
import { getPosts } from '@/lib/db/posts'

interface PostData {
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

export default async function PostHandler() {
	const posts: PostData[] = await getPosts()
	return (
		<div>
			{posts.map(post => (
				<Post key={post.id} post={post} />
			))}
		</div>
	)
}
