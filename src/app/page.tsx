import About from '@/components/About/page'
import Experience from '@/components/Experience/page'
import Projects from '@/components/Projects/page'
import Hobbies from '@/components/Hobbies/page'
import Education from '@/components/Education/page'
import Socials from '@/components/Socials/page'
import DSA from '@/components/DSA/page'
import Contact from '@/components/Contact/page'
import styles from './layout.module.css'
import Image from 'next/image'

export default function Home() {
    return (
        <>
            <div className={styles.gradientTop}>
                <Image src="/static/gradient.png" alt="gradient" className={styles.gradient} width={759} height={233}/>
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
                <Image src="/static/gradient.png" alt="gradient" className={styles.gradient} width={759} height={233} />
            </div>
        </>
    )
}


