/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        bgnav:'#015560',
        hoverorange:'#fd3e00',
        textcolorv:'#02c39a',
      },
      textShadow: {
       pepe: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        lg: '4px 4px 6px rgba(255, 255, 255, 0.5)',
      },
      boxShadow:{
        'neon': '0 0 10px #015560, 0 0 20px #015560, 0 0 30px #015560, 0 0 40px #015560'
      }
    },
  },
  plugins: [],
}
