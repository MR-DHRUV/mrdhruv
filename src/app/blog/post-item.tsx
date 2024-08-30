import { Calendar } from 'iconoir-react';
import Link from 'next/link'

interface PostItemProps {
    title: string;
    description?: string;
    slug: string;
    date: string;
}

export default function PostItem({ title, description, slug, date }: PostItemProps) {
    return (
        <article className='flex flex-col gap-2 border-border border-b py-4'>
            <div>
                <h2 className='text-2xl font-bold'>
                    <Link href={slug}>{title}</Link>
                </h2>
            </div>
            <div className='text-muted'>
                {description}
            </div>
            <div className="flex justify-between items-center">
                <dl>
                    <dt className='sr-only'>Published On</dt>
                    <dd className='text-sm sm:text-base font-medium flex items-center gap-2'>
                        <Calendar className='w-4 h-4' />
                        <time dateTime={date}>{new Date(date).toLocaleDateString()}</time>
                    </dd>
                </dl>
            </div>
        </article>
    )
}