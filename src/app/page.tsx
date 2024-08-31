"use client";
import About from '@/components/About/page'
import Experience from '@/components/Experience/page'
import Projects from '@/components/Projects/page'
import Hobbies from '@/components/Hobbies/page'
import Education from '@/components/Education/page'
import Socials from '@/components/Socials/page'
import DSA from '@/components/DSA/page'
import Contact from '@/components/Contact/page'
import Skills from '@/components/Skills/page'
import Reveal from "./Reveal"
import styles from './layout.module.css'

export default function Home() {
    return (
        <>
            <div className={styles.gradientTop}>
                <img src="/static/gradient.png" alt="gradient" className={styles.gradient} />
            </div>
            <Reveal>
                <About />
            </Reveal>
            <Reveal>
                <Education />
            </Reveal>
            <Reveal>
                <Socials />
            </Reveal>
            <Reveal>
                <Experience />
            </Reveal>
            {/* <Reveal>
                    <Skills />
                </Reveal>  */}
            <Reveal>
                <DSA />
            </Reveal>
            <Reveal>
                <Projects />
            </Reveal>
            <Reveal>
                <Hobbies />
            </Reveal>
            <Reveal>
                <Contact />
            </Reveal>
            <div className={styles.gradientbottom}>
                <img src="/static/gradient.png" alt="gradient" className={styles.gradient} />
            </div>
        </>
    )
}


