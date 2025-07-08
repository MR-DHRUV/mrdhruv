"use client";

import { ArrowLeft } from 'iconoir-react'
import styles from './button.module.css'
import React from 'react'
import Link from 'next/link';

export default function BackButton() {
    React.useEffect(() => {
        const handleScroll = () => {
            const button = document.querySelector(`.${styles.backBtn}`);
            if (!button) return;
            if (window.scrollY > 500) {
                button.classList.add(`${styles.scrolled}`);
            } else {
                button.classList.remove(`${styles.scrolled}`);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Link href='/' className={styles.backBtnDesktop} >
            <ArrowLeft width={24} height={24} color='rgb(158, 158, 158)' />
        </Link>
    )
}
