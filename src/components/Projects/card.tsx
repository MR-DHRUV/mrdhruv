import React from "react";
import styles from "./page.module.css"
import { ArrowRight } from "iconoir-react"
import GppGoodIcon from '@mui/icons-material/GppGood';
import Link from "next/link";
import { cardProp } from "./d_projects"


const Card: React.FC<cardProp> = ({ isLast, url, name, icon }) => {
    return (
        <div className={!isLast ? styles.item : styles.itemEnd}>
            <div className={styles.left}>
                <div className={styles.imageContainer}>
                    {icon}
                </div>
                <p className={styles.pname}>{name}</p>
            </div>
            <Link href={url} target="_blank" className={styles.link}>
                <p className={styles.linkText}>
                    Take a look
                </p>
                <ArrowRight width={12} height={12} />
            </Link>
        </div>
    )
}

export default Card;