import About from '@/components/About/page'
import Experience from '@/components/Experience/page'
import Projects from '@/components/Projects/page'
import Hobbies from '@/components/Hobbies/page'
import Education from '@/components/Education/page'
import Socials from '@/components/Socials/page'
import DSA from '@/components/DSA/page'
import Contact from '@/components/Contact/page'
import styles from './layout.module.css'

export default function Home() {
    return (
        <>
            <div className={styles.gradientTop}>
                <img src="/static/gradient.png" alt="gradient" className={styles.gradient} />
            </div>
            <About />
            <Education />
            <Socials />
            <Experience />
            <DSA />
            <Projects />
            <Hobbies />
            <Contact />
            <div className={styles.gradientbottom}>
                <img src="/static/gradient.png" alt="gradient" className={styles.gradient} />
            </div>
        </>
    )
}


