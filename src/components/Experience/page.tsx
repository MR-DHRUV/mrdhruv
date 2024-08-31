import Card, {cardProp} from "./card"
import styles from "./page.module.css"
import Accordion from 'react-bootstrap/Accordion';
import expData from "./d_exp.json"


export default function Experience() {
    return (
        <div className="main-container bg-white">
            <h2 className="section-heading">
                Experience
            </h2>
            <Accordion>
                {expData.map((item,idx)=>{
                    const data: cardProp = { ...item, idx: idx.toString() };;
                    return(
                        <Card {...data} key={idx} ></Card>
                    )
                })}
            </Accordion>
        </div>
    )
}