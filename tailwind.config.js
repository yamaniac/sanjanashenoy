import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './posts/**/*.md',
  ],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './src/**/*.{js,jsx,ts,tsx}',
      './posts/**/*.md',
    ],
  },
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        scroll: 'scroll 30s linear infinite',
        'pulse-once': 'pulse-once 2s ease-in-out 1',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'pulse-once': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
        },
      },
    },
  },
  plugins: [
    typography,
    function({ addUtilities }) {
      addUtilities({
        '.mask-gradient': {
          'mask-image': 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
          '-webkit-mask-image': 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
        }
      })
    }
  ],
} 