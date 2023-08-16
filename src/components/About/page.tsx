"use client";
import styles from "./page.module.css"
import Tags from "./tags"

export default function About() {
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
                {window.innerWidth > 600 && " 🚀"} 
            </h1>
            <Tags />
            <p className={styles.description}>
                I'm a skilled web developer with expertise in <strong>Next.js, React.js, and Node.js</strong>. With my strong knowledge of <strong>Data Structures and Algorithms</strong>, I love to optimize the performance and functionality of web apps. Moreover, I have a good command of <strong>C, C++, and Python</strong>. I've worked on various projects for startups and campus clubs. Let's connect and share knowledge!
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