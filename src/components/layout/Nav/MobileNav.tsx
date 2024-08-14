'use client'

import { FC } from 'react'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Home, Clock, Flame, CircleDashed, Users } from 'lucide-react'

interface NavItem {
	href: string
	title: string
	Icon: FC<React.SVGProps<SVGSVGElement>>
}

const MobileNavLink: FC<NavItem> = ({ href, title, Icon }) => {
	const pathName = usePathname()
	const isActive = pathName === href

	return (
		<Link
			href={href}
			className={`flex flex-col items-center justify-center gap-1 transition-colors ${
				isActive ? 'text-primary' : 'text-muted-foreground'
			}`}
		>
			<Icon />
			<span className='text-xs'>{title}</span>
		</Link>
	)
}

export default function MobileNav() {
	const navItems: NavItem[] = [
		{ href: '/', title: 'Главная', Icon: Home },
		{ href: '/posts', title: 'Посты', Icon: CircleDashed },
		{ href: '/popular', title: 'Популярное', Icon: Flame },
		{ href: '/users', title: 'Пользователи', Icon: Users },
	]

	return (
		<nav className='fixed bottom-0 left-0 right-0 z-10 flex h-16 w-full items-center justify-around bg-background border-t sm:hidden'>
			{navItems.map((item, index) => (
				<MobileNavLink key={index} {...item} />
			))}
		</nav>
	)
}
