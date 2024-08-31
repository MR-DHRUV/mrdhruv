import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from "@vercel/analytics/react"
import Header from '@/components/Header/page'
import styles from './layout.module.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: {
        default: 'Dhruv | Portfolio',
        template: "%s | Dhruv"
    },
    description: 'Dhruv Gupta | Software Developer | Student at USICT, Guru Gobind Singh Indraprastha University',
    openGraph: {
        url: 'https://mrdhruv.co',
        title: 'Dhruv | Portfolio',
        description: 'Dhruv Gupta | Software Developer | Student at USICT, Guru Gobind Singh Indraprastha University',
        images: [{
            url: 'https://mrdhruv.co/static/temp.jpg',
        }],
        type: 'website',
        locale: 'en_US',
    }
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="language" content="en" />
            <body className={inter.className}>
                <div className={styles.mainContainer}>
                    <Header />
                    {children}
                </div>
                <Analytics />
            </body>
        </html>
    )
}

// 18