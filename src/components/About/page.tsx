import Tags from "./tags"

export default function About() {
    return (
        <div className="main-container bg-trans gap-16">
            <p className="desc-s">About Me:</p>
            <h1 className="heading-l">
                <span className="text-muted">
                    {'{{'}
                </span>
                SDE-Intern
                <span className="text-muted">
                    {'}}'}
                </span>
                @ 🚀GoDaddy
            </h1>
            <Tags />
            <p className="desc-l">
            Hi, I&#39;m Dhruv—a curious and passionate software developer who loves creating innovative solutions that make an impact. Proficient in <span className="fw-med">Next.js, React.js, and Node.js</span>, I excel at building high-performance applications and delivering seamless user experiences. My strong grasp of <span className="fw-med">Data Structures and Algorithms</span> helps me design scalable, reliable software. With experience working alongside startups, local businesses, and campus clubs, I thrive in dynamic teams. Currently, I&#39;m interning at <span className="fw-med">GoDaddy</span>. Beyond coding, I enjoy traveling, cars, and exploring the latest tech. Let’s connect and build something great together!
            </p>
        </div>
    )
}

