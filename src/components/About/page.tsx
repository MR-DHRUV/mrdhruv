import Tags from "./tags"

export default function About() {
    return (
        <div className="main-container bg-trans gap-16">
            <p className="desc-s">About Me:</p>
            <h1 className="heading-l">
                <span className="text-muted">
                    {'{{'}
                </span>
                Engineering
                <span className="text-muted">
                    {'}}'}
                </span>
                @ 🚀GoDaddy
            </h1>
            <Tags />
            <p className="desc-l">
                Hi<span className="hello">👋</span>, I&#39;m Dhruv, I build high fidelity software solutions that are <span className="fw-med">realistic, scalable and are build to last</span>. I work across the stack with modern technologies and I enjoy crafting fast, intuitive user experiences that solve real problems.
                I’ve built products from <span className="fw-med">0 to 1 for startups and local businesses</span> — turning ideas into fully functional, production-ready software.
                Right now, I’m working as an <span className="fw-med">SDE I at GoDaddy</span>, where I get to work on real-world, high-impact products with an awesome team. I thrive in dynamic environments and love collaborating with people who are passionate about what they do.
                Beyond tech, I’m into travelling, cars, and keeping up with the latest in software and gadgets. If you’re building something interesting or just want to connect — let’s talk!
            </p>
        </div>
    )
}

