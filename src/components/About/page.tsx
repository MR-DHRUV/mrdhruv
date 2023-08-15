import styles from "./page.module.css"

export default function About() {
    return (
        <div className={styles.about}>
            <p className={styles.aboutHead}>About Me:</p>
            <h1 className={styles.title}>
                <span className={styles.muted}>
                    {'{{'}
                </span>
                Art-Director
                <span className={styles.muted}>
                    {'}}'}
                </span>
                🚀 @ Rockie
            </h1>
            <div className={styles.tags}>
                <div className={styles.tag}>
                    <img src="https://framerusercontent.com/images/NlgEZGfsuTMScgi5lWK78nheeo.png" className={styles.tagImg} height={16} />
                    <p className={styles.tagText}>Next.js</p>
                </div>
                <div className={styles.tag}>
                    <img src="https://framerusercontent.com/images/NlgEZGfsuTMScgi5lWK78nheeo.png" className={styles.tagImg} height={16} />
                    <p className={styles.tagText}>Next.js</p>
                </div>
                <div className={styles.tag}>
                    <img src="https://framerusercontent.com/images/NlgEZGfsuTMScgi5lWK78nheeo.png" className={styles.tagImg} height={16} />
                    <p className={styles.tagText}>Next.js</p>
                </div>
            </div>
            <p className={styles.description}>
                Passionate product designer with a flair for creating intuitive user experiences. Combining creativity and problem-solving to craft visually stunning and functional designs. Dedicated to delivering innovative solutions that delight users. Ready to shape the future of user-centric products.
            </p>
        </div>
    )
}