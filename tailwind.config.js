/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        space: ['"Space Grotesk"', '"PT sans"'],
        fjalla: ['"Fjalla One"'],
        cormorant: ['"Cormorant Garamond"']
      }
    },
    
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'black': '#000000',
      'gem': {
        100: '#CAA3E1',
        200: '#B884D7',
        300: '#A765CD',
        400: '#9546C3',
        500: '#7F37A9'
      },
      'lemon':{
       100:'#FCF6BD',
       200:'#FAF19E',
       300:'#F9EC77',
       400: '#F7E650'
      } ,
      'sky': {
        100: '#75C0D1',
        200: '#3891A6',
        300: '#296b7a'

      },
      'jet': {
        100:'#999999',
        200: '#707070',
        300: '#333333',
        400: '#1f1f1f'

      }
    },
  },
  darkMode: "class",
  plugins: [],
  
};
