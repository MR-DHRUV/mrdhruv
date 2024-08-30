"use client";
import { useState } from "react";
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
    const [error, setError] = useState({
        name: "",
        email: "",
        message: "",
    })

    const validateMail = () => {
        let isValid = true;
        if (!data.email) {
          isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(data.email)) {
          isValid = false;
        }
        return isValid;
      };

    const [disable, setDisable] = useState(true)
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, [e.target.name]: e.target.value });

        if (data.email.length < 8 || data.name.length < 2 || data.message.length < 10) {
            setDisable(true);
        }
        else {
            setDisable(false);
        }
    };

    function validate(): boolean {

        let isValid: boolean = true;
        let err = {
            name: "",
            email: "",
            message: "",
        }

        if (data.email.length < 8 || !validateMail()) {
            isValid = false
            err.email = "Please enter a valid email";
        }
        if (data.name.length < 2) {
            isValid = false
            err.name = "Please enter a valid name";
        }
        if (data.message.length < 10) {
            isValid = false
            err.message = "Please enter a valid message";
        }

        setError(err);
        return isValid;
    }

    const sendMsg = async () => {

        const valid = await validate();
        if (!valid) {
            return;
        }

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
        setError({
            name: "",
            email: "",
            message: "",
        })

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
    }

    return (
        <div className="main-container bg-white">
            <h2 className="section-heading">
                Contact
            </h2>
            <p className="desc-ml text-start">
                Scrolled till here! Well stop overthinking and contact me.
            </p>
            <div className={styles.form}>
                <div className={styles.row}>
                    <TextField
                        error={error.name.length > 0 ? true : false}
                        id="outlined-controlled"
                        label={error.name.length > 0 ? "Error" : "Name"}
                        size="small"
                        type="text"
                        value={data.name}
                        onChange={onChange}
                        name="name"
                        className={styles.col}
                        helperText={error.name}
                    />
                    <TextField
                        error={error.email.length > 0 ? true : false}
                        id="outlined-controlled"
                        label={error.email.length > 0 ? "Error" : "Email"}
                        type="email"
                        size="small"
                        value={data.email}
                        onChange={onChange}
                        name="email"
                        className={styles.col}
                        helperText={error.email}
                    />
                </div>
                <TextField
                    error={error.message.length > 0 ? true : false}
                    id="outlined-multiline-static"
                    label={error.message.length > 0 ? "Error" : "Message"}
                    multiline
                    rows={4}
                    defaultValue=""
                    value={data.message}
                    onChange={onChange}
                    name="message"
                    className={styles.col}
                    helperText={error.message}
                />
                <Button variant="contained" className={styles.submit} onClick={sendMsg} style={{ backgroundColor: "#000000", color: "#ffffff" }}>Send!</Button>
            </div>
        </div>
    )
}            