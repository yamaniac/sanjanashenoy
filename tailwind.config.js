import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './posts/**/*.md',
  ],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      borderRadius: {
        card: '1rem',
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'Georgia', 'serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100%',
            table: {
              width: '100%',
              borderCollapse: 'collapse',
              margin: '1.5rem 0',
            },
            'th, td': {
              padding: '0.75rem',
              borderWidth: '1px',
              borderColor: 'var(--tw-prose-td-borders)',
            },
            th: {
              backgroundColor: 'var(--tw-prose-th-backgrounds)',
              fontWeight: '600',
            },
          },
        },
      },
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
    function ({ addUtilities }) {
      addUtilities({
        '.mask-gradient': {
          'mask-image': 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
          '-webkit-mask-image': 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
        },
      })
    },
  ],
}
