/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './layouts/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-roboto)',

      },
      colors: {
        primary: '#F3F3F3',
        secondary: '#340B52',
        terciary: '#78229B',
        quarter: '#6C3777',  
             
      },
    },
  },
  plugins: [require('@tailwindcss/forms'),],
  
}
