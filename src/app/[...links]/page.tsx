import linkData from './d_link.json'
import Link from 'next/link';
import styles from "../styles/404.module.css";
import { notFound, redirect } from 'next/navigation';

interface RedirectPageProps {
    params: {
        links: string[];
    }
}

async function getLink(params: RedirectPageProps['params']) {
    const target = linkData.find((link) => link.name === params.links[0]);
    return target;
}

// generating static paths for all links
export async function generateStaticParams(): Promise<RedirectPageProps["params"][]>{
    return linkData.map((link) => ({ links: [link.name] }));
}

export default async function RedirectPage({ params }: RedirectPageProps) {

    const target = await getLink(params);
    if (!target) {
        notFound();
    }
    else{
        redirect(target.link);
    }

    return (
        <div className={styles.mainContainer}>
            <h1 className={styles.text}>Redirecting to {target?.name}...</h1>
            <p className={styles.sub}>If the redirection doesnt happen automatically, click <a href={target?.link}>here</a>.</p>
            <Link href="/" className={styles.link}>
                Go Back
            </Link>
        </div>
    )
}

