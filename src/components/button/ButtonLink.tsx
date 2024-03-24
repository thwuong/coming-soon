import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
interface ButtonLinkProps extends React.LinkHTMLAttributes<HTMLLinkElement> {
    target?: string;
}
function ButtonLink({ children, className, href = "/", target = "_self" }: ButtonLinkProps) {
    return (
        <Link href={href} target={target} className={cn("flex items-center", className)}>
            {children}
        </Link>
    );
}

export default ButtonLink;
