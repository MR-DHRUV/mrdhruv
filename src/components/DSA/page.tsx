"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from 'next/navigation'
import styles from "./page.module.css"
import ChartDesktop from "./chartDestop";
import ChartMobile from "./chartMobile";
import Image from "next/image";
import Link from "next/link";
import { url } from "../constants"

interface data {
    catCount: {
        easy: number,
        medium: number,
        hard: number
    },
    platCount: {
        [key: string]: number; // Index signature allows accessing properties with a string key
    },
    streak: number
}

export default function DSA() {

    const [stats, setStats] = useState<data>({
        catCount: {
            easy: 352,
            medium: 541,
            hard: 152
        },
        platCount: {
            "gfg": 883,
            "leetcode": 678,
            "cn": 141
        },
        streak: 622
    });

    // const searchParams = useSearchParams()
    // const me = searchParams.get('me')
    const me = false;

    const [chartData, setChartData] = useState([
        { name: 'Easy', value: 569, },
        { name: 'Medum', value: 883, },
        { name: 'Hard', value: 250, },
    ])

    const platformInfo = [
        { name: 'GeeksForGeeks', imageSrc: 'https://media.geeksforgeeks.org/gfg-gg-logo.svg', key: 'gfg', link: "/gfg" },
        { name: 'Leetcode', imageSrc: '/static/leetcode.png', key: 'leetcode', link: "/leetcode" },
        { name: 'Coding Ninjas', imageSrc: '/static/cn.png', key: 'cn', link: "/cn" },
    ];

    const getData = async () => {
        const response = await fetch(`${url}/data${me ? "?me=true" : ""}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            mode: "cors",
            referrerPolicy: "origin-when-cross-origin",
        });

        const json = await response.json();
        await setStats(json.data);

        setChartData([
            { name: 'Easy', value: json.data.catCount.easy, },
            { name: 'Medum', value: json.data.catCount.medium, },
            { name: 'Hard', value: json.data.catCount.hard, },
        ])
    }

    const [show, setShow] = useState(true);

    useEffect(() => {
        getData();
    }, [])

    useEffect(() => {
        if (window.innerWidth >= 730) {
            setShow(true);
        }
        else {
            setShow(false);
        }
    }, [])

    return (
        <div className="main-container bg-white">
            <h2 className="section-heading">
                DSA Wrapped
            </h2>
            <div className={styles.footer}>
                <p className="desc-ml text-start">Let&#39;s commit together to solving at least one DSA problem every day, challenging our minds and strengthening our problem-solving skills. {show ? "With consistent effort, we'll not only master data structures and algorithms but also cultivate a disciplined and growth-oriented mindset." : ""}</p>
            </div>
            <div className={styles.container}>
                <div className={styles.subcontainer}>
                    <p>Problems :</p>
                    {platformInfo.map((platform) => (
                        <Link href={platform.link} target="_blank" key={platform.key} className={styles.item}>
                            <div className={styles.text}>
                                <Image src={platform.imageSrc} alt={platform.name} width={35} height={35} />
                                <p className={styles.platName}>{platform.name}</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#007acc" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5" />
                                    <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z" />
                                </svg>
                            </div>
                            <h4 className={styles.platCount}>{stats.platCount[platform.key]}</h4>
                        </Link>
                    ))}
                </div>
                <div className={styles.chartContainer}>
                    {show ? <ChartDesktop data={chartData} /> : <ChartMobile data={chartData} />}
                </div>
            </div>

            <div className={styles.statContainer}>
                <div className={styles.statHeader} >
                    <p className="desc-ml text-start">Problem of The Day Streak</p>
                    <p className="desc-ml text-start">{stats.streak}/{((Math.ceil(stats.streak / 365)) * 365)} days</p>
                </div>
                <div className={styles.statBar}>
                    <div className={styles.statPercentage} style={{ width: `${(stats.streak / ((Math.ceil(stats.streak / 365)) * 365)) * 100}%` }} />
                </div>
            </div>
        </div>
    )
}