import GppGoodIcon from '@mui/icons-material/GppGood';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import CloudIcon from '@mui/icons-material/Cloud';
import TryIcon from '@mui/icons-material/Try';
import { ReactNode } from 'react';
import { Npm, PageEdit } from 'iconoir-react';
import { FaReact, FaNodeJs, FaHtml5, FaBootstrap, FaNpm, FaMailBulk } from "react-icons/fa";
import { BiLogoMongodb } from 'react-icons/bi'
import { SiExpress } from 'react-icons/si'
import { IoLogoPwa } from 'react-icons/io5'
import { Chip } from '@mui/material'

export interface cardProp {
    isLast: boolean;
    url: string;
    name: string;
    icon: ReactNode
    description: string,
    techStack: ReactNode[],
};

const size = 22, tsize = 22;
const iconProps = { size: tsize };

const projectdata: cardProp[] = [
    {
        "url": "/authify",
        "name": "Authify",
        "isLast": false,
        "icon": <GppGoodIcon width={size} height={size} />,
        "techStack": [
            <FaNodeJs key={4} {...iconProps} />,
            <SiExpress key={5} {...iconProps} />,
            <BiLogoMongodb key={6} {...iconProps} />,
            <Npm key={7} {...iconProps} />,
        ],
        "description": ""
    },
    {
        "url": "/axonify",
        "name": "Axonify",
        "isLast": false,
        "icon": <TryIcon width={size} height={size} />,
        "techStack": [
            <FaNodeJs key={4} {...iconProps} />,
            <SiExpress key={5} {...iconProps} />,
            <BiLogoMongodb key={6} {...iconProps} />,
            <Npm key={7} {...iconProps} />,
        ],
        "description": ""
    },
    {
        "url": "/gencert",
        "name": "Certify",
        "isLast": false,
        "icon": <WorkspacePremiumIcon width={size} height={size} />,
        "techStack": [
            <FaMailBulk key={3} {...iconProps} />,
            <FaNodeJs key={4} {...iconProps} />,
            <SiExpress key={5} {...iconProps} />,
            <BiLogoMongodb key={6} {...iconProps} />,
            <Npm key={7} {...iconProps} />,
        ],
        "description": ""
    },
    {
        "url": "/mausam",
        "name": "Mausam",
        "isLast": false,
        "icon": <CloudIcon width={size} height={size} />
        ,
        "techStack": [
            <FaHtml5 key={1} {...iconProps} />,
            <FaBootstrap key={2} {...iconProps} />,
            <FaReact key={3} {...iconProps} />,
            <IoLogoPwa key={4} {...iconProps} />,
        ],
        "description": ""
    },
    {
        "url": "/notify",
        "name": "Notify",
        "isLast": true,
        "icon": <PageEdit width={size} height={size} />
        ,
        "techStack": [
            <FaHtml5 {...iconProps} key={1} />,
            <FaBootstrap {...iconProps} key={2} />,
            <FaReact {...iconProps} key={3} />,
            <FaNodeJs {...iconProps} key={4} />,
            <SiExpress {...iconProps} key={5} />,
            <BiLogoMongodb {...iconProps} key={6} />,
            <IoLogoPwa {...iconProps} key={7} />,
        ],
        "description": ""
    }
]

export default projectdata;