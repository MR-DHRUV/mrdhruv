"use client";

import About from '@/components/About/page'
import Experience from '@/components/Experience/page'
import Projects from '@/components/Projects/page'
import Hobbies from '@/components/Hobbies/page'
import Header from '@/components/Header/page'
import styles from "./page.module.css"
import Education from '@/components/Education/page'
import Socials from '@/components/Socials/page'
import DSA from '@/components/DSA/page'
import Contact from '@/components/Contact/page'
import Reveal from "./Reveal"

export default function Home() {
    return (
        <>
            <div className={styles.mainContainer}>
                <div className={styles.gradientTop}>
                    <img src="/static/gradient.png" alt="gradient" className={styles.gradient} />
                </div>

                <Header />
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
            </div>
            {/* <div className={styles.gradientbottom}></div> */}
        </>
    )
}


