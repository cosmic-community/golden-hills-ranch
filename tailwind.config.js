/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ranch: {
          50: '#fef7ed',
          100: '#fdedd3',
          200: '#fad8a5',
          300: '#f6be6d',
          400: '#f19833',
          500: '#ed7a0b',
          600: '#de6006',
          700: '#b84708',
          800: '#93390e',
          900: '#78300f',
        },
        earth: {
          50: '#f6f3f0',
          100: '#e8e0d8',
          200: '#dcc9b8',
          300: '#caa992',
          400: '#bb906e',
          500: '#a3744f',
          600: '#8c5f42',
          700: '#744e37',
          800: '#614132',
          900: '#52392d',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
    },
  },
  plugins: [],
}