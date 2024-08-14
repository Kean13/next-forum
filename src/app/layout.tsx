import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { ThemeProvider } from '@/components/common/ThemeProvider'

import Nav from '@/components/layout/Nav/Nav'
import MobileNav from '@/components/layout/Nav/MobileNav'
import Header from '@/components/layout/Header'

import './globals.css'

const font = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Платформа для онлайн-обсуждений',
	description: 'Гибкая платформа для онлайн-обсуждений',
	themeColor: '#EA580C',
	openGraph: {
		title: 'NextForum',
		description: 'NextForum — Гибкая платформа для онлайн-обсуждений',
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={font.className}>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange
				>
					<aside className='fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex'>
						<Nav />
					</aside>
					<aside>
						<MobileNav />
					</aside>
					<div className='sm:container'>
						<div className='flex flex-col sm:py-4'>
							<Header />
						</div>
						<main className='flex flex-col pl-6 pr-6 py-6 sm:py-2'>
							{children}
						</main>
					</div>
				</ThemeProvider>
			</body>
		</html>
	)
}
