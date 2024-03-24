import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            fontFamily: {
                inter: ["Inter", ...defaultTheme.fontFamily.sans],
                beaufort: ["Beaufort", ...defaultTheme.fontFamily.sans],
                spiegel: ["Spiegel", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: {
                    1: "#000",
                },
                secondary: {
                    1: "#888888",
                },
            },
        },
    },
    plugins: [],
};
export default config;
