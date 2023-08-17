import styles from "./page.module.css"

export default function Education() {
    return (
        <div className={styles.experience}>
            <h2 className="section-heading">
                Education
            </h2>
            <div className={styles.item}>
                <div className={styles.left}>
                    <img src="/static/mtabu.jpeg" alt="" height={35} className={styles.img} />
                    <div className={styles.info}>
                        <div className={styles.text}>
                            <p className={styles.role}>XII - Science/Non-Medical</p>
                        </div>
                        <div className={styles.text}>
                            <p className={styles.company}>Mount Abu Public School</p>
                        </div>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.info}>
                        <p className={styles.p}>2020 - 2021</p>
                        <p className={styles.score}>92.4 %</p>
                    </div>
                </div>
            </div>
            <div className={styles.itemEnd}>
                <div className={styles.left}>
                    <img src="/static/ggsipu.png" alt="" height={35} className={styles.img} />
                    <div className={styles.info}>
                        <div className={styles.text}>
                            <p className={styles.role}>B.Tech Computer Science</p>
                        </div>
                        <div className={styles.text}>
                            <p className={styles.company}>USICT, GGSIPU</p>
                        </div>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.info}>
                        <p className={styles.p}>2021 - Present</p>
                        <p className={styles.score}>9.155 GPA</p>
                    </div>
                </div>
            </div>


        </div>
    )
}