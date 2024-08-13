import { Poppins } from 'next/font/google'
import { cn } from '@/lib/utils'

const font = Poppins({
	subsets: ['latin'],
	weight: ['600'],
})

export default function Logo() {
	return (
		<div className='flex flex-col items-center'>
			<h1
				className={cn(
					'text-2xl font-semibold text-foreground',
					font.className,
				)}
			>
				NextForum
			</h1>
		</div>
	)
}
