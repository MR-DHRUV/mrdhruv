import { ReactNode } from 'react';
import { PageEdit } from 'iconoir-react';
import { Code, InterestsOutlined, WorkspacePremium, GppGood, NearMe, Try } from '@mui/icons-material';

export interface cardProp {
    isLast: boolean;
    url: string;
    name: string;
    icon: ReactNode;
    description: string;
};

export interface DictProp{
    [key: string]: ReactNode;
}

const size = 22;
const dict: DictProp = {
    "pathfinding": <NearMe width={size} height={size} />,
    "authify": <GppGood width={size} height={size} />,
    "axonify": <Try width={size} height={size} />,
    "certify": <WorkspacePremium width={size} height={size} />,
    "validator": <Code width={size} height={size} />,
    "notify": <PageEdit width={size} height={size} />,
    "smoothy": <InterestsOutlined width={size} height={size} />
}


// const projectdata: cardProp[] = [
//     {
//         "url": "/pathfinding",
//         "name": "A* Pathfinding Visualizer",
//         "isLast": false,
//         "icon": <NearMe width={size} height={size} />
//     },
//     {
//         "url": "/authify",
//         "name": "Authify",
//         "isLast": false,
//         "icon": <GppGood width={size} height={size} />
//     },
//     {
//         "url": "/axonify",
//         "name": "Axonify",
//         "isLast": false,
//         "icon": <Try width={size} height={size} />
//     },
//     {
//         "url": "/gencert",
//         "name": "Certify",
//         "isLast": false,
//         "icon": <WorkspacePremium width={size} height={size} />
//     },
//     {
//         "url": "/validator",
//         "name": "HTML Dom Validator",
//         "isLast": false,
//         "icon": <Code width={size} height={size} />
//     },
//     {
//         "url": "/notify",
//         "name": "Notify",
//         "isLast": false,
//         "icon": <PageEdit width={size} height={size} />
//     },
//     {
//         "url": "/smoothy",
//         "name": "Smoothy",
//         "isLast": true,
//         "icon": <InterestsOutlined width={size} height={size} />
//     }
// ]

export default dict;