import Image from 'next/image'
import styles from './page.module.css'
import { LinkedIn, Mail, PageStar } from 'iconoir-react'
import Link from 'next/link'
import About from '@/components/About/page'
import Experience from '@/components/Experience/page'
import Projects from '@/components/Projects/page'
import Hobbies from '@/components/Hobbies/page'

export default function Home() {
  return (
    <>
      <div className={styles.gradientTop}>
        <img src="/gradient.png" alt="gradient" className={styles.gradient}/>
      </div>
      <div className={styles.mainContainer}>
        <div className={styles.header}>
          <div className={styles.left}>
            <div className={styles.imageDiv}>
              <Image src={"/dhruv.jpg"} alt='Dhruv' height={64} width={64} className={styles.headerImage} unoptimized />
            </div>
            <div className={styles.textDiv}>
              <h3 className={styles.name}>
                Dhruv Gupta
              </h3>
              <p className={styles.sub}>
                Nerd on linkedin! Explorer on Instagram
              </p>
            </div>
          </div>
          <div className={styles.right}>

            <Link href='/' target="_blank" className={styles.headerBtn} >
              <PageStar width={24} height={24} color='rgb(158, 158, 158)' />
              <p>
                Resume
              </p>
            </Link>
          </div>
        </div>
        <About />
        <Experience />
        <Projects />
        <Hobbies />
      </div>
      <div className={styles.gradientbottom}>
        <img src="/gradient.png" alt="gradient" className={styles.gradient}/>
      </div>
      {/* <div className={styles.gradientbottom}></div> */}
    </>
  )
}


/*
  <Link href='/' target="_blank" className={styles.headerSocial} >
            <LinkedIn width={24} height={24} color='rgb(158, 158, 158)' />
          </Link>
          <Link href='/' target="_blank" className={styles.headerSocial} >
            <Mail width={24} height={24} color='rgb(158, 158, 158)' />
          </Link>
          <Link href='/' target="_blank" className={styles.headerSocial} >
            <PageStar width={24} height={24} color='rgb(158, 158, 158)' />
          </Link>
*/