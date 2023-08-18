"use client";
import styles from "./page.module.css"
import Card, { cardProp } from "./card"
import { Carousel } from "./carousel"
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import SportsTennisIcon from '@mui/icons-material/SportsTennis';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import SailingIcon from '@mui/icons-material/Sailing';

export default function Contact() {
    return (
        <div className={styles.container}>
            <div className={styles.subcontainer}>
                <h2 className="section-heading">
                    Hobbies
                </h2>
                <Card Icon={<DriveEtaIcon width={22} height={22} />} h="Driving" isLast={false} />
                <Card Icon={<MusicNoteIcon width={22} height={22} />} h="Music" isLast={false} />
                <Card Icon={<SailingIcon width={22} height={22} />} h="Travelling" isLast={true} />
            </div>
            <div className={styles.subcontainer}>
                <Carousel />
                {/* <iframe src="https://open.spotify.com/embed/playlist/39d35DN2b1DkxEc2obaXF9?utm_source=generator&theme=0" width="100%"  frameBorder="0" height="352px" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" allowFullScreen={false}></iframe> */}
            </div>
        </div>
    ) 
}      