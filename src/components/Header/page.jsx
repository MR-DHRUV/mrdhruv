import React from 'react'
import Image from 'next/image'
import { LinkedIn, Mail, PageStar } from 'iconoir-react'
import Link from 'next/link'
import styles from "./page.module.css"

export default function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.left}>
                <div className={styles.imageDiv}>
                    <Image src={"/dhruv.jpg"} alt='Dhruv' height={64} width={64} className={styles.headerImage} unoptimized />
                </div>
                <div className={styles.textDiv}>
                    <h3 className={styles.name}>
                        Dhruv Gupta
                    </h3>
                    <p className={styles.sub}>
                        Nerd on linkedin! Explorer on Instagram
                    </p>
                </div> 
            </div>
            <div className={styles.right}>

                <Link href='/' target="_blank" className={styles.headerBtn} >
                    <PageStar width={24} height={24} color='rgb(158, 158, 158)' />
                    <p>
                        Resume
                    </p>
                </Link>
            </div>
        </div>
    )
}
