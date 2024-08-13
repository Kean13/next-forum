import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Filter, List, Tags, Inbox } from 'lucide-react'

export default function Toolbar() {
	return (
		<div className='w-full flex items-center justify-between'>
			<ul className='flex sm:gap-4'>
				<Button variant='ghost'>
					<Filter className='h-5 w-5 text-primary sm:mr-2' />
					<li className='hidden sm:block'>Все посты</li>
				</Button>
				<Button variant='ghost'>
					<List className='h-5 w-5 text-primary sm:mr-2' />
					<li className='hidden sm:block'>Все категории</li>
				</Button>
				<Button variant='ghost'>
					<Tags className='h-5 w-5 text-primary sm:mr-2' />
					<li className='hidden sm:block'>Все тэги</li>
				</Button>
				<Button variant='ghost'>
					<Inbox className='h-5 w-5 text-primary sm:mr-2' />
					<li className='hidden sm:block'>
						Пометить как прочитанное
					</li>
				</Button>
			</ul>
			<Link href='/new-post'>
				<Button size='sm'>Создать пост</Button>
			</Link>
		</div>
	)
}
