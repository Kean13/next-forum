import { database } from '@/lib/db/core'

export async function getTags() {
	const tags = await database.tag.findMany()
	return tags
}

export async function getTagById(tagId: string) {
	const tag = await database.tag.findUnique({
		where: {
			id: Number(tagId),
		},
	})
	return tag
}
