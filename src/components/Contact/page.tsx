"use client";
import { useRef, useState } from "react";
import styles from "./page.module.css"
import { TextField, Button } from "@mui/material";

export default function Contact() {

    const [data, setData] = useState({
        name: "",
        email: "",
        message: "",
    })

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

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
                <Button variant="contained" className={styles.submit}>Send!</Button>
            </div>

        </div>
    )
}            