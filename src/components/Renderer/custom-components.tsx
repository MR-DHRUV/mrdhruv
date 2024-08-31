import { ReactNode, ComponentProps } from "react";
import "../../app/styles/tailwind.global.css"
import { cn } from "./Utils";

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
                className="pb-0 mb-2 heading-m mt-12"
                {...props}
            >
                {children}
            </h1>
            <hr className={cn("mt-0 !pt-0 mb-5 border-zinc-400")} />
        </>
    );
}

export function h2({
    children,
    ...props
}: Props) {
    return (
        <>
            <h2
                className="heading-s mb-1 pb-0"
                {...props}
            >
                {children}
            </h2>
        </>
    );
}

export function h3({
    children,
    ...props
}: Props) {
    return (
        <>
            <h3
                className="heading-font mb-1 pb-0"
                {...props}
            >
                {children}
            </h3>
        </>
    );
}

export function h4({
    children,
    ...props
}: Props) {
    return (
        <>
            <h4
                className="heading-font mb-1 pb-0"
                {...props}
            >
                {children}
            </h4>
        </>
    );
}

export function h5({
    children,
    ...props
}: Props) {
    return (
        <>
            <h5
                className="heading-font mb-1 pb-0"
                {...props}
            >
                {children}
            </h5>
        </>
    );
}

export function h6({
    children,
    ...props
}: Props) {
    return (
        <>
            <h6
                className="heading-font mb-1 pb-0"
                {...props}
            >
                {children}
            </h6>
        </>
    );
}

export function p({
    children,
    ...props
}: Props) {
    return (
        <>
            <p
                className="desc-ml !text-[18px]"
                {...props}
            >
                {children}
            </p>
        </>
    );
};

export function a({
    children,
    ...props
}: ComponentProps<"a">) {
    return (
        <>
            <a
                className="text-blue-400"
                target={props?.href?.startsWith("#") ? "_self" : "_blank"}
                {...props}
            >
                {children}
            </a>
        </>
    );
};

export function li({
    children,
    ...props
}: Props) {
    return (
        <>
            <li
                className="m-0 p-0"
                {...props}
            >
                {children}
            </li>
        </>
    );
};