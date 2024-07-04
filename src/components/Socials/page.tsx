import { LinkedIn, Mail, GitHub } from "iconoir-react"
import MicrosoftIcon from '@mui/icons-material/Microsoft';
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
                <MicrosoftIcon width={24} height={24} style={{color:"rgb(158, 158, 158)"}} /> 
            </Link>
        </div> 
    )
}

 