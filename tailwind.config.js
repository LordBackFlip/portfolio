/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 0.0625rem 0.5rem 0 rgba(0,0,0,.4)',
        'body': 'rgb(0 0 0 / 30%) 0px -23px 25px 0px inset, rgb(0 0 0 / 32%) 0px -36px 30px 0px inset, rgb(0 0 0 / 22%) 0px -79px 40px 0px inset, rgb(0 0 0 / 13%) 0px 2px 1px, rgb(0 0 0 / 15%) 0px 4px 2px, rgb(0 0 0 / 17%) 0px 8px 4px, rgb(0 0 0 / 16%) 0px 16px 8px, rgb(0 0 0 / 23%) 0px -32px 16px'
      }
    },
  },
  plugins: [],
}
