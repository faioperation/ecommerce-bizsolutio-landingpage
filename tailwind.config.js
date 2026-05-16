/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: '#6228d7',
          blue: '#4b4eea',
          orange: '#ff4d4d',
          pink: '#ee2a69',
          dark: '#050505',
          "dark-accent": '#101014',
        }
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #4b4eea 0%, #ee2a69 100%)',
        'btn-gradient': 'linear-gradient(90deg, #6228d7 0%, #ee2a69 100%)',
      }
    },
  },
  plugins: [],
}
