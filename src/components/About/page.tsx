"use client";
import styles from "./page.module.css"
import Tags from "./tags"
import { useState, useEffect } from 'react'

export default function About() {

    const [show, setShow] = useState(false);

    useEffect(() => {
        if (window.innerWidth > 600) {
            setShow(true);
        }
        else {
            setShow(false);
        }
    }, [])

    return (
        <div className={styles.about}>
            <p className={styles.aboutHead}>About Me:</p>
            <h1 className={styles.title}>
                <span className={styles.muted}>
                    {'{{'}
                </span>
                Software-Developer
                <span className={styles.muted}>
                    {'}}'}
                </span>
                {show ? " 🚀" : ""}
            </h1>
            <Tags />
            <p className={styles.description}>
                I&#39;m a skilled software developer with expertise in <strong>Next.js, React.js, and Node.js</strong>. With my strong knowledge of <strong>Data Structures and Algorithms</strong>, I love to optimize the performance and functionality of web apps. I possess a strong command of <strong>C, C++, and Python</strong>. I&#39;ve worked on various projects for startups and campus clubs. Let&#39;s connect and weave our thoughts!
            </p>
        </div>
    )
}

/**
 <div className={styles.tag}>
                    <img src="https://framerusercontent.com/images/NlgEZGfsuTMScgi5lWK78nheeo.png" className={styles.tagImg} height={16} />
                    <p className={styles.tagText}>Next.js</p>
                </div>
                <div className={styles.tag}>
                    <img src="https://framerusercontent.com/images/NlgEZGfsuTMScgi5lWK78nheeo.png" className={styles.tagImg} height={16} />
                    <p className={styles.tagText}>Next.js</p>
                </div> 
 */ 