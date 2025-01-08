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
                I&#39;m a skilled software developer with expertise in <span className="fw-med">Next.js, React.js, and Node.js</span>. Leveraging my strong knowledge of <span className="fw-med">Data Structures and Algorithms</span>, I enjoy optimizing the performance and functionality of web apps and backend services. My passion lies in creating seamless user experiences rather than just web pages. I have collaborated on numerous projects with <span className="fw-med">startups, local businesses and campus clubs</span>. Let&#39;s connect and bring our ideas to life!
            </p>
        </div>
    )
}

