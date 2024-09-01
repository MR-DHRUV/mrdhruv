import Image from 'next/image';
import * as runtime from 'react/jsx-runtime';
import Callout from './callout';
import { a, figure, h1, h2, h3, h4, h5, h6, li, p } from './custom-components';

const useMDXComponents = (code: string) => {
    // velite generated a function to render the mdx and saves it as string
    // so we are here converting that string to a function and returning it
    const fn = new Function(code);
    return fn({...runtime}).default;
}

const components = {
    Image,
    Callout,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    a,
    li,
    p,
    figure,
}

interface MDXProps {
    code: string;
}

export function MDXContent({ code }: MDXProps) {
    const Component = useMDXComponents(code);
    return <Component components={components} />
}