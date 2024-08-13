import { formatDistanceToNow } from 'date-fns'
import Link from 'next/link'

import { Badge } from '@/components/ui/badge'
import { ThumbsUp, Reply } from 'lucide-react'

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

interface PostProps {
	post: PostData
}

export default function Post({ post }: PostProps) {
	return (
		<Link href={'/post/' + post.id}>
			<div className='flex items-center justify-between mt-8 transition hover:opacity-75'>
				<div className='flex flex-col'>
					<div>
						<div className='text-lg sm:text-xl font-semibold transition'>
							{post.title}
						</div>
					</div>
					<div className='mt-1'>
						{post.tags.map(tag => (
							<Badge key={tag} className='mr-2'>
								{tag}
							</Badge>
						))}
						<span className='ml-1 text-sm opacity-50'>
							{formatDistanceToNow(new Date(post.createdAt), {
								addSuffix: true,
							})}
						</span>
					</div>
				</div>
				<div className='flex items-center justify-center gap-4'>
					<div className='flex items-center justify-center gap-1'>
						<Reply />
						{post.replies.length}
					</div>
					<div className='flex items-center justify-center gap-1'>
						<ThumbsUp />
						{post.likes}
					</div>
				</div>
			</div>
		</Link>
	)
}
