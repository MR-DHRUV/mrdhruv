"use client";
import React, { useEffect } from 'react'
import Image from 'next/image'
import { LinkedIn, Mail, PageStar } from 'iconoir-react'
import Link from 'next/link'
import styles from "./page.module.css"
import Typewriter from "react-ts-typewriter";

export default function Header() {

    // hide cursor
    setTimeout(() => {
        document.querySelector('#typewriter span span').style.display = 'none';
    }, 4100);
 
    return (
        <div className={styles.header}>
            <div className={styles.left}>
                <div className={styles.imageDiv}>
                    <Image src={"/static/dhruv.jpg"} alt='Dhruv' height={64} width={64} className={styles.headerImage} unoptimized />
                </div>
                <div className={styles.textDiv}>
                    <h3 className={styles.name}>
                        Dhruv Gupta
                    </h3>
                    <p className={styles.sub} id='typewriter'>
                        <Typewriter text="Nerd on linkedin! Explorer on Instagram " />
                    </p>
                </div>
            </div>
            <div className={styles.right}>
                <Link href='/resume' target="_blank" className={styles.headerBtn} >
                    <PageStar width={24} height={24} color='rgb(158, 158, 158)' />
                    <p>
                        Resume
                    </p>
                </Link>
            </div>
        </div>
    )
}
