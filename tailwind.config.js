/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/app/blog/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/project/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/Renderer/**/*.{js,ts,jsx,tsx,mdx}",
        "./content/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [require("@tailwindcss/typography")],
}



