"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface ShineBorderProps {
    borderRadius?: number;
    borderWidth?: number;
    duration?: number;
    color?: string | string[];
    className?: string;
    children: React.ReactNode;
}

export function ShineBorder({
    borderRadius = 12,
    borderWidth = 1,
    duration = 14,
    color = ["#0A84FF", "#00E5C3", "#6E40C9"],
    className,
    children,
}: ShineBorderProps) {
    return (
        <div
            style={
                {
                    "--border-radius": `${borderRadius}px`,
                    "--border-width": `${borderWidth}px`,
                    "--shine-pulse-duration": `${duration}s`,
                    "--mask-linear-gradient": `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
                    "--background-radial-gradient": `radial-gradient(transparent,transparent, ${Array.isArray(color) ? color.join(",") : color
                        },transparent,transparent)`,
                } as React.CSSProperties
            }
            className={cn(
                "relative rounded-[--border-radius] p-[--border-width]",
                "before:absolute before:inset-0 before:rounded-[--border-radius] before:p-[--border-width]",
                "before:will-change-[background-position] before:content-[''] before:![-webkit-mask-composite:xor] before:![mask-composite:exclude]",
                "before:[background-image:--background-radial-gradient] before:[background-size:300%_300%]",
                "before:[mask:--mask-linear-gradient]",
                "before:animate-shine motion-reduce:before:animate-none",
                className
            )}
        >
            {children}
        </div>
    );
}
