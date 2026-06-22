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
        'black-premium': '#000000',
        'pink-principal': '#FF5C93',
        'pink-claro': '#FFB6C9',
        'pink-medio': '#FF7AA8',
      },
      fontFamily: {
        sans: ['Poppins', 'Inter', 'Montserrat', 'sans-serif'],
        decorative: ['Great Vibes', 'Allura', 'cursive'],
      },
      backgroundImage: {
        'valen-gradient': 'linear-gradient(135deg, #FFB6C9 0%, #FF7AA8 50%, #FF4F9A 100%)',
      },
      boxShadow: {
        'pink-glow': '0 0 30px rgba(255, 92, 147, 0.3)',
        'card-premium': '0 10px 40px rgba(0, 0, 0, 0.08)',
      },
      borderRadius: {
        '3xl': '24px',
        '4xl': '32px',
      },
    },
  },
  plugins: [],
}
export default config
