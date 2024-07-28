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
        <div className="main-container bg-trans gap-16">
            <p className="desc-s">About Me:</p>
            <h1 className="heading-l">
                <span className="text-muted">
                    {'{{'}
                </span>
                Software-Developer
                <span className="text-muted">
                    {'}}'}
                </span>
                {show ? " 🚀" : ""}
            </h1>
            <Tags />
            <p className="desc-l">
                I&#39;m a skilled software developer with expertise in <strong>Next.js, React.js, and Node.js</strong>. Leveraging my strong knowledge of <strong>Data Structures and Algorithms</strong>, I enjoy optimizing the performance and functionality of web apps and backend services. My passion lies in creating seamless user experiences rather than just web pages. I have collaborated on numerous projects with <strong>startups, local businesses and campus clubs</strong>. Let&#39;s connect and bring our ideas to life!
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