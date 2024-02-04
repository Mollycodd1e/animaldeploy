import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { SideMenu } from './widgets/sideMenu/ui'
import s from './layout.module.scss'
import './global.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Test',
	description: 'for pets',
	robots: {
		index: false,
		follow: true,
		nocache: true,
		googleBot: {
			index: true,
			follow: false,
			noimageindex: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	
	return (
		<html lang='ru'>
			<body className={inter.className}>
				<SideMenu />
				<div className={s.contentWrapper}>{children}</div>
			</body>
		</html>
	)
}
