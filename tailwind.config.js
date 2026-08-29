/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        pine: '#073b2a',
        fairway: '#14804a',
        grass: '#2fb36d',
        cream: '#fffaf0',
        gold: '#d7a437',
        ink: '#10241b',
      },
      fontFamily: {
        sans: ['"Inter Variable"', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 45px rgba(7, 59, 42, 0.13)',
        glow: '0 20px 55px rgba(47, 179, 109, 0.18)',
      },
    },
  },
  plugins: [],
};
