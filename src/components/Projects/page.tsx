import Card from "./card"
import projectData from "./d_projects"

export default function Projects() {
    return (
        <div className="main-container bg-white">
            <h2 className="section-heading">
                Projects
            </h2>
            {projectData.map((item, idx) => (
                <Card {...item} key={idx}/>
            ))}
        </div>
    )
}  