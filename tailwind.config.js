/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'brand-pink': '#972469',
        'brand-light-pink': '#ffd4ec',
        'brand-dark-pink': '#72124c',
        'brand-hot-pink': '#9c276d',
      },
      fontFamily: {
        'rock-bold': ['Rock Bold', 'sans-serif'],
        'trebuchet': ['Trebuchet MS', 'sans-serif'],
      },
      boxShadow: {
        'neon': '2px 0 0 #972469, 0 2px 0 #972469, -2px 0 0 #972469, 0 -2px 0 #972469',
      },
      backgroundImage: {
        'gradient-pink': 'linear-gradient(0deg, #FFFFFF 0%, #ffd4ec 100%)',
      }
    },
  },
  plugins: [],
}