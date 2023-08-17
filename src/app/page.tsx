import About from '@/components/About/page'
import Experience from '@/components/Experience/page'
import Projects from '@/components/Projects/page'
import Hobbies from '@/components/Hobbies/page'
import Header from '@/components/Header/page'
import styles from "./page.module.css"
import Education from '@/components/Education/page'
import Socials from '@/components/Socials/page'
import DSA from '@/components/DSA/page'

export default function Home() {
  return (
    <>
      <div className={styles.gradientTop}>
        <img src="/static/gradient.png" alt="gradient" className={styles.gradient}/>
      </div>
      <div className={styles.mainContainer}>
        <Header />
        <About />
        <Education />
        <Socials />
        <Experience />
        <DSA />
        <Projects />
        <Hobbies />
      </div> 
      <div className={styles.gradientbottom}>
        <img src="/static/gradient.png" alt="gradient" className={styles.gradient}/>
      </div>
      {/* <div className={styles.gradientbottom}></div> */}
    </>
  )
}


