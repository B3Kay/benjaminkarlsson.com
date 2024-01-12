/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      maxWidth: {
        '9/10': '90%'
      },
      gridTemplateColumns: {

        // Complex site-specific column configuration
        'layout': 'auto 1fr auto',
      },
      gridTemplateRows: {

        // Complex site-specific column configuration
        'layout': 'auto 1fr auto',
      },
      borderWidth: {
        '1': '1px'
      }
    },
  },
  daisyui: {
    themes: ["night", "cmyk"],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui"), require('tailwindcss-logical'), require('tailwindcss-fluid-type'),],
}

