import { blogs } from "#site/content"
import { MDXContent } from "@/app/blog/Renderer/mdx-components";
import { notFound } from "next/navigation";
import "../page.css";

interface PostPageProps {
    params: {
        slug: string[];
    }
}

async function getPost(params: PostPageProps['params']) {
    const slug = params?.slug.join('/');
    console.log("slug", slug);
    const post = blogs.find((post) => post.slugAsParams === slug);
    return post;
}

// Generating Satatic Pages for all blogs at build time
export async function generateStaticParams(): Promise<PostPageProps["params"][]> {
    return blogs.map((post) => ({ slug: post.slugAsParams.split('/') }));
}

export default async function PostPage({ params }: PostPageProps) {

    const post = await getPost(params);
    if (!post || post.published === false) {
        notFound();
    }

    return <article className="container py-6 prose max-w-3-xl mx-auto">
        <h1 className="mb-2">{post.title}</h1>
        {post.description ? <p className="text-xl mt-0 text-muted-foreground">{post.description}</p> : null}
        <hr className="my-4" />
        <MDXContent code={post.body} />
    </article>
}