import { clsx } from "clsx";
import type { ButtonHTMLAttributes } from "react";
export function Button({ className, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) { return <button className={clsx("inline-flex h-9 items-center justify-center gap-2 rounded-md bg-white px-3 text-sm font-medium text-slate-950 transition hover:bg-slate-200 disabled:opacity-50", className)} {...props} />; }
