import { ChipProps } from "../Chip";
import { CplusplusOriginal, COriginal, JavaOriginal, JavascriptOriginal, TypescriptOriginal, PythonOriginal, BootstrapOriginal, TailwindcssOriginal, MaterialuiOriginal, JqueryOriginal, ReactOriginal, NextjsOriginal, NodejsOriginal, ExpressOriginal, OauthOriginal, MongodbOriginal, PostgresqlOriginal, MysqlOriginal, Windows11Original, CsharpOriginal, DotNetOriginal, RedisOriginal, AzureOriginal, VercelOriginal, FirebaseOriginal } from "devicons-react"
import { AccountTree, CalendarToday, Hub, Podcasts, SmartToy, Storage } from "@mui/icons-material";
import JWT from "./JWT"

interface SkillCategories {
    "Languages": ChipProps[];
    "Frontend": ChipProps[];
    "Backend": ChipProps[];
    "Database and Cloud": ChipProps[];
    "Coursework": ChipProps[];
    [key: string]: ChipProps[];
};

export interface SVGProps {
    width: number;
    height: number;
}

const skills: SkillCategories = {
    "Languages": [
        { Icon: COriginal, text: "C" },
        { Icon: CplusplusOriginal, text: "C++" },
        { Icon: CsharpOriginal, text: "C#" },
        { Icon: JavaOriginal, text: "Java" },
        { Icon: JavascriptOriginal, text: "JavaScript" },
        { Icon: TypescriptOriginal, text: "TypeScript" },
        { Icon: PythonOriginal, text: "Python" }
    ],
    "Frontend": [
        { Icon: ReactOriginal, text: "React.js" },
        { Icon: NextjsOriginal, text: "Next.js" },
        { Icon: DotNetOriginal, text: ".Net" },
        { Icon: BootstrapOriginal, text: "Bootstrap" },
        { Icon: TailwindcssOriginal, text: "Tailwind CSS" },
        { Icon: MaterialuiOriginal, text: "Material UI" },
        { Icon: JqueryOriginal, text: "jQuery" },
    ],
    "Backend": [
        { Icon: NodejsOriginal, text: "Node.js" },
        { Icon: ExpressOriginal, text: "Express.js" },
        { Icon: OauthOriginal, text: "OAuth" },
        { Icon: JWT, text: "JWT" },
        { Icon: RedisOriginal, text: "Redis" },
    ],
    "Database and Cloud": [
        { Icon: MongodbOriginal, text: "MongoDB" },
        { Icon: PostgresqlOriginal, text: "PostgreSQL" },
        { Icon: MysqlOriginal, text: "MySQL" },
        { Icon: FirebaseOriginal, text: "Firebase" },
        { Icon: AzureOriginal, text: "Microsoft Azure" },
        { Icon: VercelOriginal, text: "Vercel" },
    ],
    "Coursework": [
        { Icon: AccountTree, text: "Data Structures and Algorithms" },
        { Icon: Windows11Original, text: "Operating Systems" },
        { Icon: Storage, text: "Database Management Systems" },
        { Icon: Podcasts, text: "Computer Networks" },
        { Icon: SmartToy, text: "Machine Learning" },
        { Icon: Hub, text: "Deep Learning" },
        { Icon: CalendarToday, text: "Agile" },
    ]
};

export default skills;