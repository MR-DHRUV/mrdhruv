import GppGoodIcon from '@mui/icons-material/GppGood';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import CloudIcon from '@mui/icons-material/Cloud';
import TryIcon from '@mui/icons-material/Try';
import { ReactNode } from 'react';
import { PageEdit } from 'iconoir-react';

export interface cardProp {
    isLast: boolean;
    url: string;
    name: string;
    icon: ReactNode
};

const size = 22;

const projectdata: cardProp[] = [
    {
        "url": "/authify",
        "name": "Authify",
        "isLast": false,
        "icon": <GppGoodIcon width={size} height={size} />
    },
    {
        "url": "/axonify",
        "name": "Axonify",
        "isLast": false,
        "icon": <TryIcon width={size} height={size} />
    },
    {
        "url": "/gencert",
        "name": "Certify",
        "isLast": false,
        "icon": <WorkspacePremiumIcon width={size} height={size} />
    },
    {
        "url": "/mausam",
        "name": "Mausam",
        "isLast": false,
        "icon": <CloudIcon width={size} height={size} />
    },
    {
        "url": "/notify",
        "name": "Notify",
        "isLast": true,
        "icon": <PageEdit width={size} height={size} />
    }
]

export default projectdata;