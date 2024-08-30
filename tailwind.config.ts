/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  safelist: [
    'bg-link-dark-gray',
    'bg-link-black',
    'bg-link-red',
    'bg-link-dark-red',
    'bg-link-light-blue',
    'bg-link-blue',
    'bg-link-dark-blue',
    'bg-link-darkest-blue',
    'bg-link-darkest-purple',
    'bg-link-pink',
    'bg-link-orange',
    'bg-link-dark-orange',
    'bg-link-green',
  ],
  theme: {
    extend: {
      colors: {
        'dark-purple': '#633CFF',
        'light-purple': '#BEADFF',
        'lightest-purple': '#EFEBFF',
        'dark-gray': '#333333',
        'medium-gray': '#737373',
        'light-gray': '#D9D9D9',
        'background-white': '#FAFAFA',
        'medium-red': '#FF3939',
        'link-red': '#EE3939',
        'link-dark-red': '#8A1A50',
        'link-dark-gray': '#333333',
        'link-black': '#1A1A1A',
        'link-light-blue': '#43B7E9',
        'link-blue': '#2D68FF',
        'link-dark-blue': '#0330D1',
        'link-darkest-blue': '#2442AC',
        'link-darkest-purple': '#302267',
        'link-pink': '#EE3FC8',
        'link-orange': '#0330D1',
        'link-dark-orange': '#EC7100',
        'link-green': '#008000',
      },
      fontFamily: {
        Instrument: ['Instrument Sans', 'sans-serif'],
      },
      fontSize: {
        title: ['32px', { fontWeight: '700' }],
        titleSmall: ['24px', { fontWeight: '700' }],
      },
      borderColor: {
        'input-border': '#D9D9D9',
        'focus-border': '#633CFF',
        'error-border': '#FF3939',
      },
      boxShadow: {
        'custom-purple': '0px 0px 32px 0px rgba(99, 60, 255, 0.25)',
      },
      transitionProperty: {
        fill: 'fill',
      },
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        spin: 'spin 2.5s linear infinite',
      },
      screens: {
        btab: '700x',
      },
    },
  },
  plugins: [],
};
