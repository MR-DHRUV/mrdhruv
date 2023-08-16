import React from "react";
import styles from "./page.module.css"
import { ArrowRight } from "iconoir-react"
import Link from "next/link";
import DriveEtaIcon from '@mui/icons-material/DriveEta';
export interface cardProp {
    isLast: boolean;
};


const Card: React.FC<cardProp> = ({isLast})=>{
    return (
        <div className={!isLast ? styles.item : styles.itemEnd}>
            <div className={styles.left}>
                <div className={styles.imageContainer}>
                    <DriveEtaIcon width={22} height={22} />
                </div>
                <p className={styles.pname}>Authify</p>
            </div>
        </div>
    )
}

export default Card;