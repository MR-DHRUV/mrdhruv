import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dhruv | Portfolio',
  description: 'Dhruv Gupta | Software Developer | Student at USICT, Guru Gobind Singh Indraprastha University'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <meta property="og:title" content="Dhruv | Portfolio" />
        <meta property="og:description" content="Dhruv Gupta | Software Developer | Student at USICT, Guru Gobind Singh Indraprastha University" />
        <meta property="og:image" content="/static/dhruv.jpg" />
        <meta property="og:url" content="mrdhruv.xyz" />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="language" content="en"/>
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
} 
