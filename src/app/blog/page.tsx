import React from 'react'
import "../styles/tailwind.global.css"
import { blogs } from '#site/content'
import PostItem from './post-item';

function page() {
    const displayPosts = blogs.filter(post => post.published);
    return (
        <div className='container max-w-4xl py-6 lg:py-10 px-4'>
            <h1 className='text-4xl font-bold'>Blog</h1>
            {displayPosts?.length > 0 ? (
                <ul className='flex flex-col'>
                    {displayPosts.map(post => {
                        const { title, description, slug, date } = post;
                        return <li key={slug}>
                            <PostItem title={title} description={description} slug={slug} date={date} />
                        </li>
                    })}
                </ul>
            ) : <></>}
        </div>
    )
}

export default page
