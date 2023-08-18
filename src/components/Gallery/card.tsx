import React,{ReactNode} from "react";
import styles from "./page.module.css"

export interface cardProp {
    Icon:ReactNode;
    isLast: boolean;
    h:string;
};


const Card: React.FC<cardProp> = ({isLast,h, Icon})=>{
    return (
        <div className={!isLast ? styles.item : styles.itemEnd}>
            <div className={styles.left}>
                <div className={styles.imageContainer}>
                    {Icon}
                </div>
                <p className={styles.pname}>{h}</p>
            </div>
        </div>
    )
}

export default Card;