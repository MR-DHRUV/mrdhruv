import React from "react";
import styles from "./page.module.css"
import { ArrowRight } from "iconoir-react"
import { cardProp } from "./d_projects"
import Link from "next/link";

const size = 22;

const Card: React.FC<cardProp> = ({ isLast, url, name, icon, description, iconColor, tags, isFirst }) => {
    return (
        <div className={!isLast ? styles.item : styles.itemEnd}>
            <div className={styles.top}>
                <div className={styles.left}>
                    <div className={styles.imageContainer} style={{ color: iconColor, fill: iconColor }}>
                        {icon}
                    </div>
                    <p className="heading-s mw-mob-fix" style={{width:"max-content"}}>{name}</p>
                </div>
                <Link href={url} className={styles.link}>
                    {isFirst ? <p className={styles.linkText}>
                        Take a look
                    </p> : null}
                    <ArrowRight width={12} height={12} />
                </Link>
            </div>
            <div className={styles.tags}>
                {tags.map((tag, index) => (
                    <span key={index} className={styles.tag}>{tag}</span>
                ))}
            </div>
            <p className="desc-m">
                {description}
            </p>
        </div>
    )
}

export default Card;