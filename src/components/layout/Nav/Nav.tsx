'use client'

import { FC } from 'react'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Home, Clock, Flame, CircleDashed, Users } from 'lucide-react'

import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
	TooltipProvider,
} from '@/components/ui/Tooltip'

interface NavItem {
	href: string
	tooltip: string
	Icon: FC<React.SVGProps<SVGSVGElement>>
}

const NavLink: FC<NavItem> = ({ href, tooltip, Icon }) => {
	const pathName = usePathname()
	const isActive = pathName === href

	return (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger asChild>
					<Link
						href={href}
						className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors md:h-8 md:w-8 ${
							isActive ? 'text-primary' : 'text-muted-foreground'
						}`}
					>
						<Icon className='h-5 w-5' />
						<span className='sr-only'>{tooltip}</span>
					</Link>
				</TooltipTrigger>
				<TooltipContent side='right'>{tooltip}</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	)
}

export default function Nav() {
	const navItems: NavItem[] = [
		{ href: '/', tooltip: 'Главная', Icon: Home },
		{ href: '/posts', tooltip: 'Посты', Icon: CircleDashed },
		{ href: '/popular', tooltip: 'Популярное', Icon: Flame },
		{ href: '/new', tooltip: 'Новое', Icon: Clock },
		{ href: '/users', tooltip: 'Пользователи', Icon: Users },
	]

	return (
		<nav className='flex flex-col items-center gap-4 px-2 sm:py-4'>
			{navItems.map((item, index) => (
				<NavLink key={index} {...item} />
			))}
		</nav>
	)
}
