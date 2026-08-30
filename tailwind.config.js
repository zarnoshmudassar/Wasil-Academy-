/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#eef2f6',
          100: '#d6e0e9',
          200: '#adc1d3',
          300: '#7f9ab5',
          400: '#4d6d8c',
          500: '#2e4d6b',
          600: '#1c3550',
          700: '#152941',
          800: '#0f2032',
          900: '#0a1826',
          950: '#060f19',
        },
        cream: {
          50: '#fefdfb',
          100: '#faf6ee',
          200: '#f5efe1',
          300: '#efe6d2',
        },
        gold: {
          300: '#e3cc94',
          400: '#d1b46f',
          500: '#c2a05a',
          600: '#a3813f',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'ui-serif', 'Georgia', 'serif'],
        body: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        arabic: ['"Amiri"', 'serif'],
      },
      backgroundImage: {
        'star-pattern': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cg fill='none' stroke='%23c2a05a' stroke-width='0.6' opacity='0.18'%3E%3Cpath d='M30 4 L36 20 L52 20 L39 30 L44 46 L30 36 L16 46 L21 30 L8 20 L24 20 Z'/%3E%3C/g%3E%3C/svg%3E\")",
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        drawLine: {
          '0%': { strokeDashoffset: '400' },
          '100%': { strokeDashoffset: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) both',
        drawLine: 'drawLine 2.4s ease-out forwards',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
        }
