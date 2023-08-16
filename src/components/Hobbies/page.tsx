"use client";
import Link from "next/link"
import styles from "./page.module.css"
import Card, { cardProp } from "./card"
import { Carousel } from "./carousel"

export default function Hobbies() {
    return (
        <div className={styles.container}>
            <div className={styles.subcontainer}>
                <h2 className="section-heading">
                    Hobbies
                </h2>
                <Card isLast={false} />
                <Card isLast={false} />
                <Card isLast={true} />
            </div>
            <div className={styles.subcontainer}>
               <Carousel />
            </div>
        </div>
    )
}   