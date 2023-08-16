import Link from "next/link"
import styles from "./page.module.css"
import Card, {cardProp} from "./card"

export default function Projects() {
    return (
        <div className={styles.experience}>
            <h2 className="section-heading">
                Projects
            </h2>
            <Card isLast={false} />
            <Card isLast={false} />
            <Card isLast={false} />
            <Card isLast={true} />
        </div>
    )
} 