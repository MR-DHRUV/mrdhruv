import styles from "./page.module.css"

export default function Experience() {
    return (
        <div className={styles.experience}>
            <h2 className="section-heading">
                Experience
            </h2>
            <div className={styles.item}>
                <div className={styles.left}>
                    <img src="https://framerusercontent.com/images/N5rprPMr8Dla8ieNGX7xilNHgM.png" alt="" height={32} className={styles.img}/>
                    <div className={styles.text}>
                        <p className={styles.role}>Art Director @ </p>
                        <p className={styles.company}>IBM</p>
                    </div>
                </div>
                <div className={styles.right}>
                    <p className={styles.p}>Jun 2020 - Mar 2021</p>
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.left}>
                    <img src="https://framerusercontent.com/images/N5rprPMr8Dla8ieNGX7xilNHgM.png" alt="" height={32} className={styles.img}/>
                    <div className={styles.text}>
                        <p className={styles.role}>Art Director @ </p>
                        <p className={styles.company}>IBM</p>
                    </div>
                </div>
                <div className={styles.right}>
                    <p className={styles.p}>Jun 2020 - Mar 2021</p>
                </div>
            </div>
            <div className={styles.itemEnd}>
                <div className={styles.left}>
                    <img src="https://framerusercontent.com/images/N5rprPMr8Dla8ieNGX7xilNHgM.png" alt="" height={32} className={styles.img}/>
                    <div className={styles.text}>
                        <p className={styles.role}>Art Director @ </p>
                        <p className={styles.company}>IBM</p>
                    </div>
                </div>
                <div className={styles.right}>
                    <p className={styles.p}>Jun 2020 - Mar 2021</p>
                </div>
            </div>
        </div>
    )
}