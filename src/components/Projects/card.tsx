"use client";
import React from "react";
import styles from "./page.module.css"
import { ArrowRight, Cancel } from "iconoir-react"
import { cardProp } from "./d_projects"
import Link from "next/link";


import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useSpring, animated } from '@react-spring/web';

interface FadeProps {
    children: React.ReactElement;
    in?: boolean;
    onClick?: any;
    onEnter?: (node: HTMLElement, isAppearing: boolean) => void;
    onExited?: (node: HTMLElement, isAppearing: boolean) => void;
    ownerState?: any;
}

const Fade = React.forwardRef<HTMLDivElement, FadeProps>(function Fade(props, ref) {
    const {
        children,
        in: open,
        onClick,
        onEnter,
        onExited,
        ownerState,
        ...other
    } = props;
    const style = useSpring({
        from: { opacity: 0 },
        to: { opacity: open ? 1 : 0 },
        onStart: () => {
            if (open && onEnter) {
                onEnter(null as any, true);
            }
        },
        onRest: () => {
            if (!open && onExited) {
                onExited(null as any, true);
            }
        },
    });

    return (
        <animated.div ref={ref} style={style} {...other}>
            {React.cloneElement(children, { onClick })}
        </animated.div>
    );
});

const modalStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "90%",
    maxWidth: 650,
    bgcolor: 'background.paper',
    padding: 24,
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    border: "2px solid #9e9e9e",
    borderRadius: 3,
    boxShadow: 24,
    p: 4,
};



const Card: React.FC<cardProp> = ({ isLast, url, name, icon, techStack }) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
            <div className={!isLast ? styles.item : styles.itemEnd}>
                <div className={styles.left}>
                    <div className={styles.imageContainer}>
                        {icon}
                    </div>
                    <p className={styles.pname}>{name}</p>
                </div>
                <button className={styles.link} onClick={handleOpen}>
                    <p className={styles.linkText}>
                        Take a look
                    </p>
                    <ArrowRight width={12} height={12} />
                </button>
            </div>

            <Modal
                aria-labelledby="spring-modal-title"
                aria-describedby="spring-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        TransitionComponent: Fade,
                    },
                }}
            >
                <Fade in={open}>
                    <Box sx={modalStyle}>
                        <div className={styles.modalHeader}>
                            <div className={styles.htop}>
                                <p className={styles.pname}>{name}</p>
                                <Cancel width={25} height={25} color="#000" style={{ cursor: "pointer" }} onClick={handleClose} />
                            </div>
                            <div className={styles.hbottom}>
                                {techStack.map((item,idx)=>(
                                    <div key={idx} className={styles.headerIcon}>{item}</div>
                                ))}
                            </div>

                        </div>
                    </Box>
                </Fade>
            </Modal>
        </>
    )
}

export default Card;