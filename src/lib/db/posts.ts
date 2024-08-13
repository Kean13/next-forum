import { database } from '@/lib/db/core'

export async function getPosts() {
	const posts = await database.post.findMany()
	return posts
}

export async function getPostById(postId: number) {
	const post = await database.post.findUnique({
		where: {
			id: Number(postId),
		},
	})
	return post
}
