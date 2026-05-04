/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: '#0A0F2C',
        cobalt: '#1E5CFF',
        'cobalt-light': '#4a7fff',
        gold: '#F0A500',
        'warm-white': '#F5F5F0',
        'dark-card': '#0F1535',
        'dark-surface': '#141836',
      },
      fontFamily: {
        display: ['Poppins', 'sans-serif'],
        body: ['Poppins', 'sans-serif'],
      },
      animation: {
        'scroll-left': 'scrollLeft 35s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 8s ease-in-out infinite 2s',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'fadeInUp': 'fadeInUp 0.6s ease-out forwards',
      },
      keyframes: {
        scrollLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
