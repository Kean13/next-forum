import Logo from '@/components/common/Logo'
import Avatar from '@/components/layout/Avatar'

export default function Header() {
	return (
		<header className='sticky top-0 flex h-14 items-center justify-between gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6'>
			<Logo />
			<Avatar link='https://i.imgur.com/weHaU1c.png' />
		</header>
	)
}
