import { clsx } from "clsx";
import type { HTMLAttributes } from "react";
export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) { return <section className={clsx("glass rounded-lg p-4", className)} {...props} />; }
