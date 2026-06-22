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
        'black-premium': '#111111',
        'pink-principal': '#FF4F9A',
        'pink-claro': '#FFB6C9',
        'pink-medio': '#FF7AA8',
        'pink-support': '#FFF0F5',
        pink: '#FF4F9A',
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'Inter', 'Montserrat', 'sans-serif'],
        decorative: ['Great Vibes', 'Allura', 'cursive'],
      },
      backgroundImage: {
        'valen-gradient': 'linear-gradient(135deg, #FFB6C9 0%, #FF7AA8 50%, #FF4F9A 100%)',
      },
      boxShadow: {
        'pink-glow': '0 0 30px rgba(255, 79, 154, 0.3)',
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
