/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'brand': {
          'pink': '#972469',
          'light-pink': '#ffd4ec',
          'dark-pink': '#72124c',
          'hot-pink': '#9c276d',
        }
      },
      fontFamily: {
        'rock-bold': ['Rock Bold', 'sans-serif'],
        'trebuchet': ['Trebuchet MS', 'sans-serif'],
      },
      spacing: {
        'page': '1rem', // 16px - padding general de página
        'content': '1.25rem', // 20px - padding interno de content-box
        'box': '1.5rem', // 24px - margin entre cajas
      }
    },
  },
  plugins: [],
}