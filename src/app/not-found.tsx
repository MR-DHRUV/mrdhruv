import styles from "./styles/404.module.css"
import type { Metadata } from 'next'
import Link from "next/link"

export const metadata: Metadata = {
    title: '404 | Not Found',
    description: 'Dhruv Gupta | Software Developer | Student at USICT, Guru Gobind Singh Indraprastha University'
}

export default function NotFound() {
    return (
        <>
            <hr style={{color:"black", height:"0.01px", width:"100%", maxWidth:"700px", marginBottom:"1rem"}} />
            <h1 className={styles.heading}>404</h1>
            <div className={styles.textContainer}>
                <p className={styles.text}>OOPS! Looks like you&#39;re lost.</p>
                <p className={styles.sub}>The page you are looking for is not avaible.</p>
            </div>
            <Link href={'/'} className={styles.link}>Go Back</Link>
        </>
    )
}


