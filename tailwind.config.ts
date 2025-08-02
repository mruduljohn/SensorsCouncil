import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--primary-rgb))',
        secondary: 'rgb(var(--secondary-rgb))',
        accent: 'rgb(var(--accent-rgb))',
        'light-bg': 'rgb(var(--light-bg-rgb))',
        'alt-bg': 'rgb(var(--alt-bg-rgb))',
        'text-dark': 'rgb(var(--text-dark-rgb))',
        'text-medium': 'rgb(var(--text-medium-rgb))',
        success: 'rgb(var(--success-rgb))',
        warning: 'rgb(var(--warning-rgb))',
        error: 'rgb(var(--error-rgb))',
      },
      fontFamily: {
        'open-sans': ['var(--font-open-sans)', 'Open Sans', 'sans-serif'],
        'calibri': ['Calibri', 'Candara', 'Segoe', 'Segoe UI', 'Optima', 'Arial', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
