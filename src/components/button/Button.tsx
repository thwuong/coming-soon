import { cn } from "@/lib/utils";
import React from "react";
type ButtonProps = React.HTMLAttributes<HTMLButtonElement>;
function Button({ children, className }: ButtonProps) {
    return (
        <button
            className={cn(
                "flex items-center py-2 px-4 bg-primary-1/85 duration-300 hover:bg-primary-1 text-white",
                className
            )}
        >
            {children}
        </button>
    );
}

export default Button;
