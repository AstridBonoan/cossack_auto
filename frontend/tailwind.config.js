/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: '#0F1113',
        'off-white': '#EFE7DD',
        'cossack-red': '#8E0F1B',
        'muted-gray': '#707780',
        'border-gray': '#242A31',
      },
      fontFamily: {
        'heading': ['Barlow Condensed', 'system-ui', '-apple-system', 'sans-serif'],
        'body': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

