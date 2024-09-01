import { LinkedIn, Mail, GitHub } from "iconoir-react"
import styles from "./page.module.css"
import Link from "next/link"

export default function Socials() {
    return (
        <div className={styles.socials}>
            <Link href='/linkedin' target="_blank" className={styles.headerSocial} >
                <LinkedIn width={24} height={24} color='rgb(158, 158, 158)' />
            </Link>
            <Link href='/github' target="_blank" className={styles.headerSocial} >
                <GitHub width={24} height={24} color='rgb(158, 158, 158)' />
            </Link>
            <Link href='mailto:dhruvgupta742@gmail.com;' className={styles.headerSocial} >
                <Mail width={24} height={24} color='rgb(158, 158, 158)' />
            </Link>
            {/* <Link href='/' target="_blank" className={styles.headerSocial} >
                <Instagram width={24} height={24} color='rgb(158, 158, 158)' />
            </Link> */}
            <Link href='/mlsa' target="_blank" className={styles.headerSocial} >
                <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="MicrosoftIcon" width="24" height="24" style={{fill:"rgb(158, 158, 158)"}}><path d="M2 3h9v9H2V3m9 19H2v-9h9v9M21 3v9h-9V3h9m0 19h-9v-9h9v9Z"></path></svg>
            </Link>
        </div> 
    )
}

 