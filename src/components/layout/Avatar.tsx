import { FC } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

interface MenuItem {
	label: string
	route: string
}

const MenuItemComponent: FC<MenuItem> = ({ label, route }) => (
	<DropdownMenuItem>
		<Link href={route}>{label}</Link>
	</DropdownMenuItem>
)

interface AvatarProps {
	link: string
}

export default function Avatar({ link }: AvatarProps) {
	const menuItems: MenuItem[] = [
		{ label: 'Профиль', route: '/account/profile' },
		{ label: 'Избранное', route: '/account/favorite' },
		{ label: 'Настройки', route: '/account/settings' },
		{ label: 'Выход', route: '/account/logout' },
	]

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Link href={'/account/profile'}>
					<Image
						src={link}
						width={36}
						height={36}
						alt='Avatar'
						className='overflow-hidden rounded-full'
					/>
				</Link>
			</DropdownMenuTrigger>
			<DropdownMenuContent align='end'>
				<DropdownMenuLabel>My Account</DropdownMenuLabel>
				<DropdownMenuSeparator />
				{menuItems.map((item, index) => (
					<MenuItemComponent key={index} {...item} />
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
