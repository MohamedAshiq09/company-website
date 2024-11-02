import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        rotate: 'rotate 20s linear infinite',
        fadeIn: 'fadeIn 2s ease-out forwards',
      },
      keyframes: {
        rotate: {
          from: { transform: 'rotateY(0deg) rotateX(23.5deg)' },
          to: { transform: 'rotateY(360deg) rotateX(23.5deg)' },
        },
        fadeIn: {
          from: {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
    },
  
  },
  plugins: [],
};
export default config;
