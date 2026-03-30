import { transform } from 'typescript';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation:{
        'ping-large': 'ping-large 1s ease-in-out infinite',
        'move-left': 'move-left 1s linear infinite',
        'move-right': 'move-right 1s linear infinite',
      },
      keyframes: {
        'ping-large': {
          '75%, 100%': {
            transform: 'scale(3)',
            opacity: '0',
          }
        },
        'move-left':{
          '0%':{
            transform: 'translateX(0)',
          },
          '100%':{
            transform: 'translateX(-50%)',
          }
        },
        'move-right':{
          '0%':{
            transform: 'translateX(-50%)',
          },
          '100%':{
            transform: 'translateX(0%)',
          }
        }
      }
    },
  },
  plugins: [],
}

