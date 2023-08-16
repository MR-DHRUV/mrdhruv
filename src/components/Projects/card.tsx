import React from "react";
import styles from "./page.module.css"
import { ArrowRight } from "iconoir-react"
import GppGoodIcon from '@mui/icons-material/GppGood';
import Link from "next/link";

export interface cardProp {
    isLast: boolean;
};


const Card: React.FC<cardProp> = ({isLast})=>{
    return (
        <div className={!isLast ? styles.item : styles.itemEnd}>
            <div className={styles.left}>
                <div className={styles.imageContainer}>
                    <GppGoodIcon width={22} height={22} />
                </div>
                <p className={styles.pname}>Authify</p>
            </div>
            <Link href="/" className={styles.link}>
                <p className={styles.linkText}>
                    Take a look
                </p>
                <ArrowRight width={12} height={12} />
            </Link>
        </div>
    )
}

export default Card;