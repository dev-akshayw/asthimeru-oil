/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "herbal-green": "hsl(var(--herbal-green))",
        "herbal-light": "hsl(var(--herbal-light))",
        "herbal-gold": "hsl(var(--herbal-gold))",
        "herbal-cream": "hsl(var(--herbal-cream))",
        "herbal-dark": "hsl(var(--herbal-dark))",
        herbal: {
          green: "hsl(var(--herbal-green))",
          light: "hsl(var(--herbal-light))",
          gold: "hsl(var(--herbal-gold))",
          cream: "hsl(var(--herbal-cream))",
          dark: "hsl(var(--herbal-dark))",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
