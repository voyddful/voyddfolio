/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        space: ['"Space Grotesk"', '"PT sans"'],
        fjalla: ['"Fjalla One"'],
        cormorant: ['"Cormorant Garamond"'],
      },

      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: '#ffffff',
        black: '#000000',
        gem: {
          100: '#CAA3E1',
          200: '#B884D7',
          300: '#A765CD',
          400: '#9546C3',
          500: '#7F37A9',
        },
        lemon: {
          100: '#FCF6BD',
          200: '#FAF19E',
          300: '#F9EC77',
          400: '#F7E650',
          500: '#f5e029',
          600: '#ead40b',
        },
        sky: {
          100: '#75C0D1',
          200: '#3891A6',
          300: '#296b7a',
          400: '#1f515c',
          500: '#19434d',
        },
        jet: {
          100: '#999999',
          200: '#707070',
          300: '#333333',
          400: '#1f1f1f',
          500: '#0a0a0a',
        },
        platinum: {
          100: '#dfdfdf',
          200: '#cccccc',
          300: '#b8b8b8',
          400: '#a3a3a3',
          500: '#8f8f8f',
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [require('daisyui')],
}
