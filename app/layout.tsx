import type { Metadata } from 'next'
import './globals.css'
import Script from 'next/script'
import Footer from './_components/Footer'
import Header from './_components/Header'

export const metadata: Metadata = {
	title: 'E-Commerce Next/Prisma',
	description: 'Criado por Luciano Elly',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="pt-br" className='font-sans font-light'>
			<Script src="https://kit.fontawesome.com/3696b778f5.js" crossOrigin="anonymous"></Script>
			<body className='h-screen flex flex-col justify-between'>
				<Header></Header>
				<main className='px-48 flex-1 pb-16 pt-6'>
					{children}
				</main>
				<Footer></Footer>
			</body>
		</html>
	)
}
