import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sugo: ['Sugo Pro Display', 'sans-serif'],
      barlow: ['Barlow', 'sans-serif']
    },
   extend: {
    colors: {
      dsOrange: '#E77300',
      dsOrangeDark: '#D26A00',
      dsBrown: '#6B2400'
    }
   }
  },
  plugins: [],
};
export default config;
