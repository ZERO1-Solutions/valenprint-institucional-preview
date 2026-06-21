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
        white: '#FFFFFF',
        black: '#111111',
        pink: '#FF4F9A',
      },
      fontFamily: {
        sans: ['Poppins', 'Inter', 'Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
