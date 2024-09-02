import { cn } from "@/components/Renderer/Utils";
import { ReactNode } from "react";

interface CalloutProps {
    children?: ReactNode;
    text: string;
    type?: "default" | "warning" | "danger";
}

export default function Callout({
    text,
    type = "default",
    ...props
}: CalloutProps) {
    return (
        <div
            className={cn(
                "my-1 mb-0 rounded-md border boder-l-4 p-1 w-full flex flex-row items-center",
                {
                    " bg-red-50 ": type === "danger",
                    " bg-yellow-50": type === "warning",
                    " bg-blue-50 ": type === "default",
                }
            )}
            {...props}
        >
            <div>{text}</div>
        </div>
    );
}