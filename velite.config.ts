import { defineConfig, defineCollection, s } from 'velite'
import rehypeSlug from 'rehype-slug'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeAutoLinkHeadings from 'rehype-autolink-headings'

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
    pattern: "project/**/*.mdx",
    schema: s.object({
        slug: s.path(), // slug is the file path
        title: s.string(), // title of the project
        description: s.string(),
        body: s.mdx(),
        tags: s.array(s.string()),
        github: s.string(),
        deployment: s.string().optional(),
        image: s.string(),
    }).transform(computedFields),
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
    collections: { projects },
    mdx: {
        rehypePlugins: [rehypeSlug, [rehypePrettyCode, { theme: 'one-dark-pro' }], [rehypeAutoLinkHeadings, { behavior: 'wrap', properties: { className: 'subheading-anchor' }, ariaLabel: "Link to section" }]],
        remarkPlugins: [],
    }
});