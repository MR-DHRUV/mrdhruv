import Card from "./card"
import { projects } from "#site/content"
import dict from "./d_projects"

export default function Projects() {
    return (
        <div className="main-container bg-white">
            <h2 className="section-heading">
                Projects
            </h2>
            {projects.sort((a, b) => {
                if (a.title === "A* Pathfinding" && b.title === "Authify") {
                    return 1;
                }else if (a.title === "Authify" && b.title === "A* Pathfinding") {
                    return -1;
                }
                return a.title.localeCompare(b.title);
            }).map((project, idx) => (
                <Card
                    description={project.description}
                    icon={dict[project.slugAsParams]}
                    isLast={idx === projects.length - 1}
                    name={project.title}
                    url={project.slug}
                    key={idx}
                    iconColor={project.color}
                    tags={project.tags}
                    isFirst={idx === 0}
                />
            ))}
        </div>
    )
}  