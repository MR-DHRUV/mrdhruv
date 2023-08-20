"use client";
import { useRef, useState } from "react";
import styles from "./page.module.css"
import { TextField, Button } from "@mui/material";
import { url } from '../constants'
import Swal from 'sweetalert2'

export default function Contact() {

    const [data, setData] = useState({
        name: "",
        email: "",
        message: "",
    })

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const sendMsg = async () => {
        const response = await fetch(`${url}/msg`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            mode: "cors",
            referrerPolicy: "origin-when-cross-origin",
            body: JSON.stringify(data)
        });

        const json = await response.json();
        console.log(json)

        Swal.fire({
            icon: 'success',
            title: 'Message Sent!',
            text: "Thanks for contacting me, I'll respond shortly.",
        })

        setData({
            name: "",
            email: "",
            message: "",
        })

    }

    return (
        <div className={styles.container}>
            <h2 className="section-heading">
                Contact
            </h2>
            <p className={styles.p}>
                Scrolled till here! Well stop overthinking and contact me.
            </p>
            <div className={styles.form}>
                <div className={styles.row}>
                    <TextField
                        id="outlined-controlled"
                        label="Name"
                        size="small"
                        type="text"
                        value={data.name}
                        onChange={onChange}
                        name="name"
                        className={styles.col}
                    />
                    <TextField
                        id="outlined-controlled"
                        label="Email"
                        type="email"
                        size="small"
                        value={data.email}
                        onChange={onChange}
                        name="email"
                        className={styles.col}
                    />
                </div>
                <TextField
                    id="outlined-multiline-static"
                    label="Message"
                    multiline
                    rows={4}
                    defaultValue=""
                    value={data.message}
                    onChange={onChange}
                    name="message"
                    className={styles.col}
                />
                <Button variant="contained" className={styles.submit} onClick={sendMsg} disabled={data.email.length < 10 || data.name.length < 2 || data.message.length < 10} style={{backgroundColor:"#000000"}}>Send!</Button>
            </div>
        </div>
    )
}            