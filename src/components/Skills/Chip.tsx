import React from 'react'
import styles from "./page.module.css"
import { SvgIconComponent } from '@mui/icons-material'
import { SVGProps } from './Icons/IconData'

export interface ChipProps {
    Icon: React.FunctionComponent<any> | SvgIconComponent | any,
    text: String
}

export default function Chip({ Icon, text }: ChipProps) {
    return (
        <div className={`${styles.chip} bg-trans`}>
            <Icon height={12} width={12} className={styles.icon} />
            {text}
        </div>
    )
}
