import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#FAF9F6',
        'text-primary': '#1A1A1A',
        'text-secondary': '#6B6B6B',
        gold: '#A08C5B',
        forest: '#1A3828',
      },
      fontFamily: {
        cormorant: ['var(--font-cormorant)', 'serif'],
        dm: ['var(--font-dm)', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.2em',
      },
      maxWidth: {
        content: '960px',
      },
    },
  },
  plugins: [],
}
export default config
