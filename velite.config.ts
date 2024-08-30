import { defineConfig, defineCollection, s } from 'velite'


// Now we want to automate certain things
// like extraction of path from url
// /project/smoothy -> smoothy
const computedFields = <T extends { slug: string }>(data: T) => ({
    ...data,
    slugAsParams: data.slug.split("/").slice(1).join("/"),
});

// defining a collection for projects
const projects = defineCollection({
    name: 'projects',
    pattern: "projects/**/*.mdx",
    schema: s.object({
        slug: s.path(), // slug is the file path
        title: s.string(), // title of the project
        body: s.mdx(),
    })
        .transform(computedFields),
});

const blogs = defineCollection({
    name: 'Post',
    pattern: "blog/**/*.mdx",
    schema: s.object({
        slug: s.path(),
        title: s.string(),
        description: s.string().optional(),
        date: s.isodate(),
        published: s.boolean().default(true),
        body: s.mdx(),
    })
        .transform(computedFields),
});

export default defineConfig({
    root: "content",
    output: {
        data: ".velite", 
        assets: "public/static", // static assets will be stored here
        base: "/static/",
        name: "[name]-[hash:6].[ext]",
        clean: true,
    },
    collections: { blogs, projects },
    mdx: {
        remarkPlugins: [],
        rehypePlugins: [],
    }
});