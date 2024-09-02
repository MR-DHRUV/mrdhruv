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
                            <p className="desc-m">{title} @ </p>
                            <p className='inter'>{org}</p>
                        </div>
                    </div>
                    <div className={styles.right}>
                        <Accordion.Header>
                            <NavArrowDown width={20} height={20} color='' />
                        </Accordion.Header>
                    </div>
                </div>
                <Accordion.Body>
                    <ul>
                        {description.split('\n').map((item, idx) => (
                            <li key={idx} className={styles.bullet}>{item}</li>
                        ))}
                   </ul>
                </Accordion.Body>
            </Accordion.Item>
        </>
    );
}

export default Card;