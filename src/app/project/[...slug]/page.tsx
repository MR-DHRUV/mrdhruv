import { projects } from "#site/content"
import { MDXContent } from "@/components/Renderer/mdx-components";
import { notFound } from "next/navigation";
import "../../styles/tailwind.global.css"
import "../../styles/mdx.css"
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Link as LinkIcon } from "iconoir-react";

interface ProjectPageProps {
    params: {
        slug: string[];
    }
}

async function getProject(params: ProjectPageProps['params']) {
    const slug = params?.slug.join('/');
    const project = projects.find((project) => project.slugAsParams === slug);
    return project;
}

// Generating Satatic Pages for all blogs at build time
export async function generateStaticParams(): Promise<ProjectPageProps["params"][]> {
    return projects.map((project) => ({ slug: project.slugAsParams.split('/') }));
}

// exporting the metadate
export async function generateMetadata({
    params
}: ProjectPageProps): Promise<Metadata> {
    const project = await getProject(params);
    if (!project) {
        return {};
    }

    return {
        title: project.title,
        description: project.description,
        openGraph: {
            title: project.title,
            description: project.description,
            type: "article",
            url: project.slug,
            images: [
                {
                    url: `/api/og?title=${project.title}`,
                    width: 1200,
                    height: 630,
                    alt: project.title
                }
            ]
        },
        twitter: {
            card: "summary_large_image",
            title: project.title,
            description: project.description,
            images: [`/api/og?title=${project.title}`]
        }
    }
}


export default async function ProjectPage({ params }: ProjectPageProps) {

    const project = await getProject(params);
    if (!project) {
        notFound();
    }

    return <>
        <div className="main-container bg-trans gap-3 w-full max-w-[700px] !justify-center">
            <h1 className="heading-xl">
                {project.title}
            </h1>

            <div className="flex flex-row flex-wrap items-center gap-2">
                {project.tags.map((tag) => (
                    <span className="bg-zinc-200 text-zinc-700 text-xs font-medium px-2.5 py-0.5 rounded" key={tag} >{tag}</span>
                ))}
            </div>

            <p className="desc-l !text-[18.7px]">
                {project.description}
            </p>

            <Image src={project.image} alt="Project Image" className="!w-full" width={630} height={235} unoptimized />

            <div className="flex flex-row flex-wrap items-center gap-3">
                {project?.deployment ? <Link href={project.deployment} className="bg-blue-100 hover:bg-blue-200 text-blue-800 text-md font-medium px-3 py-0.5 rounded-lg inline-flex items-center justify-center" target="_blank">
                    <LinkIcon className="me-1" />
                    Deployment
                </Link> : null}
                <Link href={project.github} className="bg-blue-100 hover:bg-blue-200 text-blue-800 text-md font-medium px-3 py-0.5 rounded-lg inline-flex items-center justify-center" target="_blank">
                    <LinkIcon className="me-1" />
                    Github
                </Link>
            </div>

        </div>
        <article className="prose w-full max-w-[700px] !mt-[-25px]">
            <MDXContent code={project.body} />
            <hr className=" mb-0 border-zinc-400 border-b-1" />
        </article>
    </>

}