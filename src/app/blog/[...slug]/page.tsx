import { blogs } from "#site/content"
import { MDXContent } from "@/components/Renderer/mdx-components";
import { notFound } from "next/navigation";
import "../../styles/tailwind.global.css"
import "../../styles/mdx.css"
import { Metadata } from "next";
import { title } from "process";

interface PostPageProps {
    params: {
        slug: string[];
    }
}

async function getPost(params: PostPageProps['params']) {
    const slug = params?.slug.join('/');
    const post = blogs.find((post) => post.slugAsParams === slug);
    return post;
}

// Generating Satatic Pages for all blogs at build time
export async function generateStaticParams(): Promise<PostPageProps["params"][]> {
    return blogs.map((post) => ({ slug: post.slugAsParams.split('/') }));
}

// exporting the metadate
export async function generateMetadata({
    params
}: PostPageProps):Promise<Metadata> {
    const post = await getPost(params);
    if(!post){
        return {};
    }

    return {
        title: post.title,
        description: post.description,
        openGraph: {
            title: post.title,
            description: post.description,
            type: "article",
            url: post.slug,
            images: [
                {
                    url: `/api/og?title=${post.title}`,
                    width: 1200,
                    height: 630,
                    alt: post.title
                }
            ]  
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.description,
            images: [`/api/og?title=${post.title}`]
        }
    }
}
    
    


export default async function PostPage({ params }: PostPageProps) {

    const post = await getPost(params);
    if (!post || post.published === false) {
        notFound();
    }

    return <div className="flex justify-between p-4">
        <article className="container py-6 prose max-w-3xl mx-auto">
            <h1 className="mb-2">{post.title}</h1>
            {post.description ? (
                <p className="text-xl mt-0 text-muted-foreground">{post.description}</p>
            ) : null}
            <hr className="my-4" />
            <MDXContent code={post.body} />
        </article>
    </div>
}