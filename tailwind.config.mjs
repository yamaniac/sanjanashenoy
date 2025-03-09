/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
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
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
