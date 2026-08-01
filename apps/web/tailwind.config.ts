import type { Config } from "tailwindcss";
export default { darkMode: "class", content: ["./index.html", "./src/**/*.{ts,tsx}"], theme: { extend: { colors: { border: "hsl(215 20% 18%)", background: "hsl(222 24% 7%)", foreground: "hsl(210 24% 96%)", muted: "hsl(215 16% 44%)" } } }, plugins: [] } satisfies Config;
