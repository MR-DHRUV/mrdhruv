import { ReactNode, ComponentProps } from "react";
import "../../app/styles/tailwind.global.css"

interface Props {
    children: ReactNode;
}

export function h1({
    children,
    ...props
}: Props) {
    return (
        <>
            <h1
                className="pb-0 mb-1 heading-ml mt-12"
                {...props}
            >
                {children}
            </h1>
            <hr className="mt-0 !pt-0 mb-5 border-zinc-400 border-b-[1.5px]" />
        </>
    );
}

export function h2({
    children,
    ...props
}: Props) {
    return (
        <h2
            className="heading-font mb-1 pb-0 underline decoration-zinc-300"
            {...props}
        >
            {children}
        </h2>
    );
}

export function h3({
    children,
    ...props
}: Props) {
    return (
        <h3
            className="heading-font mb-1 pb-0"
            {...props}
        >
            {children}
        </h3>
    );
}

export function h4({
    children,
    ...props
}: Props) {
    return (
        <h4
            className="heading-font mb-1 pb-0"
            {...props}
        >
            {children}
        </h4>
    );
}

export function h5({
    children,
    ...props
}: Props) {
    return (
        <h5
            className="heading-font mb-1 pb-0"
            {...props}
        >
            {children}
        </h5>
    );
}

export function h6({
    children,
    ...props
}: Props) {
    return (
        <h6
            className="heading-font mb-1 pb-0"
            {...props}
        >
            {children}
        </h6>
    );
}

export function p({
    children,
    ...props
}: Props) {
    return (
        <p
            className="desc-ml !text-[18px] mb-0"
            {...props}
        >
            {children}
        </p>
    );
};

export function a({
    children,
    ...props
}: ComponentProps<"a">) {
    return (
        <a
            className="text-blue-400"
            target={props?.href?.startsWith("#") ? "_self" : "_blank"}
            {...props}
        >
            {children}
        </a>
    );
};

export function li({
    children,
    ...props
}: Props) {
    return (
        <li
            className="p-0 desc-ml !text-[18px] my-2"
            {...props}
        >
            {children}
        </li>
    );
};

export function figure({
    children,
    ...props
}: Props) {
    return (
        <figure
            className="mb-0 mt-1"
            {...props}
        >
            {children}
        </figure>
    );
};
