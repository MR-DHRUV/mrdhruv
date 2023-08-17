"use client";
import React from 'react'
import { usePathname, useRouter } from 'next/navigation'
import linkData from './d_link.json'
import Link from 'next/link';

interface LinkData {
    name: string;
    link: string;
}

const Links = () => {

    const pathName = usePathname().split("/")[1];
    const router = useRouter();
    const target = linkData.find((item: LinkData) => item.name === pathName);
    
    if (target) {
        router.push(target.link)
    }
    else {
        router.push("/not/found/")
    }

    return (
        <div>
            {target !== undefined ? (<div>
                <h1>Redirecting to {target.name}...</h1>
                <p>If the redirection doesnt happen automatically, click <a href={target.link}>here</a>.</p>
                <Link href="/">
                    <a>Go Back</a>
                </Link>
            </div>) :
                <div>
                    Not Found
                </div>}
        </div>
    )
}

export default Links
