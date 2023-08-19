"use client";
import Accordion from 'react-bootstrap/Accordion';
import styles from "./page.module.css"
import { NavArrowDown } from 'iconoir-react';
import Image from 'next/image';

export interface cardProp {
    year: string;
    org: string;
    description: string;
    title: string;
    idx: string;
    image: string;
}

const Card: React.FC<cardProp> = ({ title, org, description, idx, image }) => {
    return (
        <>
            <Accordion.Item eventKey={idx}>
                <div className={styles.item}>
                    <div className={styles.left}>
                        <Image src={image} alt="" height={32} width={32} className={styles.img} />
                        <div className={styles.text}>
                            <p className={styles.role}>{title} @ </p>
                            <p className={styles.company}>{org}</p>
                        </div>
                    </div>
                    <div className={styles.right}>
                        <Accordion.Header>
                            <NavArrowDown width={20} height={20} color='' />
                        </Accordion.Header>
                    </div>
                </div>
                {/* <p className={styles.p}>Jun 2020 - Mar 2021</p> */}
                <Accordion.Body>
                    {description.split('\n').map((item, idx) => (
                        <li key={idx} className={styles.bullet}>{item}</li>
                    ))}
                </Accordion.Body>
            </Accordion.Item>
        </>
    );
}

export default Card;
/*
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
*/