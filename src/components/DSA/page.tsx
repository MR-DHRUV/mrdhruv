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
            "gfg": 636,
            "leetcode": 268,
            "cn": 141
        },
        streak: 420
    });

    const searchParams = useSearchParams()
    const me = searchParams.get('me')

    const [chartData, setChartData] = useState([
        { name: 'Easy', value: 260, },
        { name: 'Medum', value: 388, },
        { name: 'Hard', value: 89, },
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
        <div className={styles.dsa}>
            <h2 className="section-heading">
                DSA Wrapped
            </h2>
            <div className={styles.footer}>
                <p className={styles.p}>Let&#39;s commit together to solving at least one DSA problem every day, challenging our minds and strengthening our problem-solving skills. {show ? "With consistent effort, we'll not only master data structures and algorithms but also cultivate a disciplined and growth-oriented mindset." : ""}</p>
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
                                    <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5" />
                                    <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z" />
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
                    <p className={styles.p}>Current POTD (Problem of The Day) Streak</p>
                    <p className={styles.p}>{stats.streak} / {((Math.ceil(stats.streak / 365)) * 365)}</p>
                </div>
                <div className={styles.statBar}>
                    <div className={styles.statPercentage} style={{ width: `${(stats.streak / ((Math.ceil(stats.streak / 365)) * 365)) * 100}%` }} />
                </div>
            </div>
        </div>
    )
}



/* 
<div className={styles.dsa}>
            <h2 className="section-heading">
                DSA
            </h2>

            <div className={styles.container}>
                <div className={styles.subcontainer}>
                    {chartData.map((item, idx) => (
                        <div className={styles.statContainer} key={idx}>
                            <div className={styles.statHeader} >
                                <p className={styles.p}>{item.name}</p>
                                <p className={styles.p}>{item.value}</p>
                            </div>
                            <div className={styles.statBar}>
                                <div className={styles.statPercentage} style={{ width: `${(item.value / stats.catCount.medium) * 100}%` }} />
                            </div>
                        </div>
                    ))}
                </div>
                <Chart data={chartData} />
            </div>

            <div className={styles.statContainer}>
                <div className={styles.statHeader} >
                    <p className={styles.p}>Current POTD(Problem of The Day) Streak</p>
                    <p className={styles.p}>{stats.streak} / 365</p>
                </div>
                <div className={styles.statBar}>
                    <div className={styles.statPercentage} style={{ width: `${(stats.streak / 365) * 100}%` }} />
                </div>
            </div>

            <div className={styles.platform}>
                <div className={styles.platContainer}>
                    <Image src="https://media.geeksforgeeks.org/gfg-gg-logo.svg" alt="gfg" width={50} height={50} />
                    <p className={styles.platName}>GeeksForGeeks</p>
                    <h4 className={styles.platCount}>{stats.platCount.gfg}</h4>
                </div>
                <div className={styles.platContainer}>
                    <Image src="/static/leetcode.png" alt="leetcode" width={50} height={50} />
                    <p className={styles.platName}>LeetCode</p>
                    <h4 className={styles.platCount}>{stats.platCount.leetcode}</h4>
                </div>
                <div className={styles.platContainer}>
                    <Image src="/static/cn.png" alt="cn" width={30} height={30} />
                    <p className={styles.platName}>CodingNinjas</p>
                    <h4 className={styles.platCount}>{stats.platCount.cn}</h4>
                </div>
            </div>
        </div>
*/
/*
display: flex;
flex-direction: column;
flex-wrap: wrap;
background-color: #d9d9d97d;
border-radius: 16px;
padding: 20px;
justify-content: center;
align-items: center;
gap: 0.5rem;
height: 190px;



.page_platform__r1rMt {
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 20px;
  gap: 20px;
  max-width: 700px;
  border: 1px solid rgb(158, 158, 158);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.01);
  padding: 20px;
  padding: 20px 20px;
  border-radius: 16px;
*/