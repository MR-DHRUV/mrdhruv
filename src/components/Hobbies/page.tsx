import styles from "./page.module.css"
import Card from "./card"
// import { Carousel } from "./carousel"
import {DriveEta, SportsTennis, MusicNote, Sailing } from "@mui/icons-material"

export default function Hobbies() {
    return (
        <div className={styles.container}>
            <div className="main-container main-container-sm bg-white">
                <h2 className="section-heading">
                    Hobbies
                </h2>
                <Card Icon={<DriveEta width={22} height={22} />} h="Driving" isLast={false} />
                <Card Icon={<MusicNote width={22} height={22} />} h="Music" isLast={false} />
                <Card Icon={<Sailing width={22} height={22} />} h="Travelling" isLast={false} />
                <Card Icon={<SportsTennis width={22} height={22} />} h="Table Tennis" isLast={true} />
            </div>
            <div className="main-container main-container-sm bg-white">
                {/* <Carousel /> */}
                <iframe src="https://open.spotify.com/embed/playlist/39d35DN2b1DkxEc2obaXF9?utm_source=generator&theme=0" width="100%"  frameBorder="0" height="352px" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" allowFullScreen={false}></iframe>
            </div>
        </div>
    ) 
}      