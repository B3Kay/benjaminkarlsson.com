/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      maxWidth: {
        '9/10': '90%'
      },
    },
  },
  daisyui: {
    themes: ["night"],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
}

