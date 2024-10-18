import { NextRequest } from "next/server";
import { ImageResponse } from "next/og";
import { projects } from "#site/content"

export const runtime = "edge";
export async function GET(req: NextRequest) {
    try {
        const { searchParams } = req.nextUrl;
        const title = searchParams.get("title");
        if (!title) {
            return new Response("Title is required", { status: 400 });
        }

        const project = projects.find((project) => project.title === title);
        if (!project) {
            return new Response("Project not found", { status: 404 });
        }

        return new ImageResponse((
            <div tw="flex-shrink-0 m-4 bg-[#f5f5f5] w-[700px] flex flex-col justify-start items-start p-6 content-start flex-wrap rounded-lg border border-gray-400 border-lg justify-center">
                <div tw="text-[40px] mb-3 mt-0 font-extrabold">
                    {project.title}
                </div>
                <div tw="flex flex-row flex-wrap items-center mb-3">
                    {project.tags.map((tag) => (
                        <span tw="bg-zinc-200 text-zinc-700 text-xs font-medium px-2.5 py-0.5 rounded mr-2" key={tag} >{tag}</span>
                    ))}
                </div>
                <p tw="desc-l !text-[18.7px]">
                    {project.description}
                </p>
                <img src={`https://www.mrdhruv.co${project.image}`} tw="w-full rounded-lg border" width={630} height={235} />
                <div tw="flex flex-row justify-between w-full mt-6">
                    <a href={project.github} tw="text-md font-medium text-blue-500" target="_blank">
                        mrdhruv
                    </a>
                    <a href={project.github} tw="text-md font-medium text-blue-500" target="_blank">
                        mrdhruv.co/{project.slug}
                    </a>
                </div>
            </div>
        ),
            {
                width: 732,
                height: 540,
            }
        )
    } catch (error) {
        console.error(error);
        return new Response("Cant generate a og image", { status: 500 });
    }
}