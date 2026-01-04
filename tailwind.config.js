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
          DEFAULT: '#1a2a4a',
          light: '#2d4a7c',
          dark: '#0f1a2e',
        },
        secondary: {
          DEFAULT: '#c9a962',
          light: '#d4b87a',
        },
        accent: '#b8432f',
        'bg-cream': '#f8f9fc',
        'bg-warm': '#f0f2f7',
        'text-dark': '#1a1a1a',
        'text-body': '#3d3d3d',
        'text-light': '#6b6b6b',
      },
      fontFamily: {
        sans: ['Noto Sans JP', 'sans-serif'],
        serif: ['Noto Serif JP', 'serif'],
      },
      boxShadow: {
        'soft': '0 4px 30px rgba(26, 42, 74, 0.08)',
        'medium': '0 8px 40px rgba(26, 42, 74, 0.12)',
        'strong': '0 20px 60px rgba(26, 42, 74, 0.15)',
      },
    },
  },
  plugins: [],
}

