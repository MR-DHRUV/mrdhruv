import GppGoodIcon from '@mui/icons-material/GppGood';
import NearMeIcon from '@mui/icons-material/NearMe';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import TryIcon from '@mui/icons-material/Try';
import { ReactNode } from 'react';
import { PageEdit } from 'iconoir-react';
import InterestsOutlinedIcon from '@mui/icons-material/InterestsOutlined';

export interface cardProp {
    isLast: boolean;
    url: string;
    name: string;
    icon: ReactNode
};

const size = 22;

const projectdata: cardProp[] = [
    {
        "url": "/pathfinding",
        "name": "A* Pathfinding Visualizer",
        "isLast": false,
        "icon": <NearMeIcon width={size} height={size} />
    },
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
        "url": "/validator",
        "name": "HTML Dom Validator",
        "isLast": false,
        "icon": <WorkspacePremiumIcon width={size} height={size} />
    },
    {
        "url": "/notify",
        "name": "Notify",
        "isLast": false,
        "icon": <PageEdit width={size} height={size} />
    },
    {
        "url": "/smoothy",
        "name": "Smoothy",
        "isLast": true,
        "icon": <InterestsOutlinedIcon width={size} height={size} />
    }
]

export default projectdata;