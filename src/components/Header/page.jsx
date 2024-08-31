import React from 'react'
import Image from 'next/image'
import { PageStar } from 'iconoir-react'
import Link from 'next/link'
import styles from "./page.module.css"
import Typewriter from "react-ts-typewriter";

export default function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.left}>
                <div className={styles.imageDiv}>
                    <Image src={"/static/temp.jpg"} alt='Dhruv' height={64} width={64} className={styles.headerImage} unoptimized />
                </div>
                <div className={styles.textDiv}>
                    <h3 className={styles.name}>
                        Dhruv Gupta
                    </h3>
                    <p className={styles.sub} id='typewriter'>
                        <Typewriter text="An avid traveler with a nerdy streak! " />
                    </p>
                </div>
            </div>
            <div className={styles.right}>
                <Link href='/resume' target="_blank" className={styles.headerBtn} >
                    <PageStar width={24} height={24} color='rgb(158, 158, 158)' />
                    <p className='fw-med'>
                        Résumé
                    </p>
                </Link>
            </div>
        </div>
    )
}
