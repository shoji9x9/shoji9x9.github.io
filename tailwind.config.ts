import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      width: {
        '128': '32rem', // w-128
        '144': '36rem', // w-144
        '160': '40rem', // w-160
        '176': '44rem', // w-176
        '192': '48rem', // w-192
        '208': '52rem', // w-208
        '224': '56rem', // w-224
        '240': '60rem', // w-240
        '256': '64rem', // w-256
      }
    },
  },
  plugins: [],
}
export default config
