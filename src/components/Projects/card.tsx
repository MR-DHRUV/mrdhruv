import React from "react";
import styles from "./page.module.css"
import { ArrowRight } from "iconoir-react"
import { cardProp } from "./d_projects"
import Link from "next/link";


const Card: React.FC<cardProp> = ({ isLast, url, name, icon, description }) => {
    return (
        <div className={!isLast ? styles.item : styles.item}>
            <div className={styles.top}>
                <div className={styles.left}>
                    <div className={styles.imageContainer}>
                        {icon}
                    </div>
                    <p className={styles.pname}>{name}</p>
                </div>
                <Link href={url} className={styles.link}>
                    <p className={styles.linkText}>
                        Take a look
                    </p>
                    <ArrowRight width={12} height={12} />
                </Link>
            </div>
            <p className="desc-m">
               {description}
            </p>
        </div>
    )
}

export default Card;