/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2C5F4A',
          light: '#3d7a5f',
          dark: '#1e4435',
        },
        secondary: {
          DEFAULT: '#D4A574',
          light: '#e0b88a',
        },
        accent: '#C9302C',
        'bg-cream': '#f9f7f4',
        'bg-warm': '#f3f0eb',
        'text-dark': '#1a1a1a',
        'text-body': '#3d3d3d',
        'text-light': '#6b6b6b',
      },
      fontFamily: {
        serif: ['Noto Serif JP', 'serif'],
        sans: ['Noto Sans JP', 'sans-serif'],
      },
    },
  },
  plugins: [],
}