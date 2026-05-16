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
          purple: '#a855f7',
          orange: '#f97316',
          pink: '#f43f5e',
          dark: '#0a0a0c',
          "dark-accent": '#151518',
        }
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #a855f7 0%, #f97316 100%)',
        'btn-gradient': 'linear-gradient(135deg, #a855f7 0%, #f43f5e 100%)',
      }
    },
  },
  plugins: [],
}
