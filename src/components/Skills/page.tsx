import styles from "./page.module.css"
import Chip, {ChipProps} from "./Chip"
import skills from "./Icons/IconData"

export default function Skills() {
    return (
        <div className="main-container bg-white">
            <h2 className="section-heading">
                Skills
            </h2>
            {Object.keys(skills).map((key:string) => (
                <div className={styles.item} key={key}>
                    <p>{key}:</p>
                    <div className={styles.icons}>
                        {skills[key].map(({Icon,text},idx:any) => (
                            <Chip Icon={Icon} text={text} key={idx} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}