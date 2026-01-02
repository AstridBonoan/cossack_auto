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
      letterSpacing: {
        'wider': '0.05em',
        'widest': '0.1em',
      },
      spacing: {
        '18': '4.5rem',
        '20': '5rem',
        '28': '7rem',
        '32': '8rem',
        '40': '10rem',
      },
    },
  },
  plugins: [],
}

