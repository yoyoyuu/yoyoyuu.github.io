/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'primary': '#972469',
        'secondary': '#72124c',
        'light-pink': '#ffd4ec',
        'dark-pink': '#9c276d',
        'highlight': '#ffb3d9',
        'hover-pink': '#d13a9c',
      },
      fontFamily: {
        'rock-bold': ['Rock Bold', 'serif'],
        'trebuchet': ['Trebuchet MS', 'sans-serif'],
      },
      backgroundImage: {
        'body-pattern': "url('/img_index/fondo-.gif')",
        'gradient-pink': 'linear-gradient(0deg, #FFFFFF 0%, #ffd4ec 100%)',
      },
      spacing: {
        '128': '32rem',
      },
      boxShadow: {
        'neon-pink': '2px 0 0 #972469, 0 2px 0 #972469, -2px 0 0 #972469, 0 -2px 0 #972469',
        'card': '0 0 0 10px #FFFFFF',
      },
    },
  },
  plugins: [],
}