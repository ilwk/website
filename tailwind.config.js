/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],

  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-animate'),
    require('daisyui'),
  ],
  daisyui: {
    themes: ['light', 'black'],
    darkTheme: 'black',
  },
};
