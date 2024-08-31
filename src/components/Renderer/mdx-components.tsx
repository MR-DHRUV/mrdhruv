import Image from 'next/image';
import * as runtime from 'react/jsx-runtime';
import Callout from './callout';

const useMDXComponents = (code: string) => {
    // velite generated a function to render the mdx and saves it as string
    // so we are here converting that string to a function and returning it
    const fn = new Function(code);
    return fn({...runtime}).default;
}

const components = {
    Image,
    Callout,
    h1: (props: any) => <h1 className='text-4xl font-bold' {...props} />,
}

interface MDXProps {
    code: string;
}

export function MDXContent({ code }: MDXProps) {
    const Component = useMDXComponents(code);
    return <Component components={components} />
}