"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css"
import Chart from "./chart.";


interface data {
    catCount: {
        easy: number,
        medium: number,
        hard: number
    },
    platCount: {
        gfg: number,
        leetcode: number,
        cn: number
    },
    streak: number
}


export default function DSA() {

    const [stats, setStats] = useState<data>({
        catCount: {
            easy: 261,
            medium: 390,
            hard: 88
        },
        platCount: {
            gfg: 492,
            leetcode: 106,
            cn: 141
        },
        streak: 250
    });

    const [chartData, setChartData] = useState([
        { name: 'Easy', value: 260, },
        { name: 'Medum', value: 388, },
        { name: 'Hard', value: 89, },
    ])

    const getData = async () => {
        const response = await fetch('http://localhost:5000/dsa', {
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

    // useEffect(() => {
    //     getData();
    // }, [])


    return (
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


        </div>
    )
} 