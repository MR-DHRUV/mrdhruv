"use client";
import React from 'react'
import { usePathname, useRouter } from 'next/navigation'
import linkData from './d_link.json'
import Link from 'next/link';
import styles from "../404.module.css";

interface LinkData {
    name: string;
    link: string;
}

const Links = () => {

    const pathName = usePathname().split("/")[1];
    const router = useRouter();
    const target = linkData.find((item: LinkData) => item.name === pathName);

    if (target) {
        router.push(target.link)
    }
    else {
        router.push("/not/found/")
    }

    return (
        <div>
            {target !== undefined ? (<div className={styles.mainContainer}>
                <h1 className={styles.text}>Redirecting to {target.name}...</h1>
                <p className={styles.sub}>If the redirection doesnt happen automatically, click <a href={target.link}>here</a>.</p>
                <Link href="/" className={styles.link}>
                    Go Back
                </Link>
            </div>) :
                <div className={styles.mainContainer}>
                    <p className={styles.text}>Not Found</p>
                </div>}
        </div>
    )
}

export default Links
