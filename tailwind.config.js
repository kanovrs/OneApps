/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/consts/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          yellow: '#F9FF00',
          red: '#F9452D',
        },
        bg: {
          black: '#0A0A0A',
          black90: '#0F0F0F',
          black80: '#161616',
          black70: '#1A1A1A',
          red: '#FFEDEA',
        },
        neutral: {
          30: '#7A7A7A',
          10: '#DEDEDE',
          20: '#E8E8E8',
        },
        text: {
          light: '#FEFFF8',
          gray: '#A9A9A9',
          dark: '#575757',
        },
      },
      fontSize: {
        sup: ['14px', '20px'],
        h2: ['54px', '100%'],
        h3: ['28px', '100%'],
        reg: ['16px', '22px'],
      },
      keyframes: {
        'line-slide': {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '50%': { transform: 'translateY(6px)', opacity: '1' },
          '100%': {
            transform: 'translateY(6px) translateX(100%)',
            opacity: '0',
          },
        },
        'border-slide': {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
      animation: {
        'line-slide': 'line-slide 0.5s forwards',
        'border-slide': 'border-slide 0.4s 0.3s forwards',
      },
    },
  },
  plugins: [],
};
