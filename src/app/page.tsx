import Image from 'next/image'
import styles from './page.module.css'
import { LinkedIn, Mail, PageStar } from 'iconoir-react'
import Link from 'next/link'
import About from '@/components/About/page'

export default function Home() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.gradientTop}>
      </div>
      <div className={styles.header}>
        <div className={styles.left}>
          <div className={styles.imageDiv}>
            <img src={"https://framerusercontent.com/images/uYDafOqOLQcHhkanfoF18FN5t00.jpg"} alt='Dhruv' height={64} width={64} className={styles.headerImage} />
          </div>
          <div className={styles.textDiv}>
            <h3 className={styles.name}>
              Franky Outwood
            </h3>
            <p className={styles.sub}>
              I’ll be available in May.
            </p>
          </div>
        </div>
        <div className={styles.right}>
          <Link href='/' target="_blank" className={styles.headerSocial} >
            <LinkedIn width={24} height={24} color='rgb(158, 158, 158)' />
          </Link>
          <Link href='/' target="_blank" className={styles.headerSocial} >
            <Mail width={24} height={24} color='rgb(158, 158, 158)' />
          </Link>
          <Link href='/' target="_blank" className={styles.headerSocial} >
            <PageStar width={24} height={24} color='rgb(158, 158, 158)' />
          </Link>
        </div>
      </div>
      <About />
      <div className={styles.gradientbottom}>
      </div>
    </div>
  )
}
