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
          DEFAULT: '#2C3E50', // Deep slate blue
          dark: '#1A252F',
        },
        accent: {
          DEFAULT: '#A0522D', // Warm sienna
          light: '#C17A50',
          dark: '#7D3F23',
        },
        background: {
          DEFAULT: '#FAF9F6', // Off-white
          light: '#FFFFFF',
          dark: '#F5F5F0',
        },
        text: {
          DEFAULT: '#2C3E50',
          light: '#5A6C7D',
          lighter: '#8A9BA8',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
