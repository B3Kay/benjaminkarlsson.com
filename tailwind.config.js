/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      maxWidth: {
        '9/10': '90%'
      },
      gridTemplateColumns: {
        'layout': 'auto 1fr auto',
      },
      gridTemplateRows: {
        'layout': 'auto 1fr auto',
      },
      borderWidth: {
        '1': '1px'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        'tight': '-0.02em',
        'tighter': '-0.03em',
      },
    },
  },
  daisyui: {
    themes: [
      {
        dark: {
          "primary": "#ffffff",
          "primary-content": "#000000",
          "secondary": "#a3a3a3",
          "accent": "#737373",
          "neutral": "#171717",
          "neutral-content": "#e5e5e5",
          "base-100": "#0a0a0a",
          "base-200": "#111111",
          "base-300": "#1a1a1a",
          "base-content": "#e5e5e5",
          "info": "#a3a3a3",
          "success": "#a3a3a3",
          "warning": "#a3a3a3",
          "error": "#a3a3a3",
        },
      },
      {
        light: {
          "primary": "#0a0a0a",
          "primary-content": "#ffffff",
          "secondary": "#525252",
          "accent": "#a3a3a3",
          "neutral": "#f5f5f5",
          "neutral-content": "#171717",
          "base-100": "#ffffff",
          "base-200": "#fafafa",
          "base-300": "#e5e5e5",
          "base-content": "#171717",
          "info": "#525252",
          "success": "#525252",
          "warning": "#525252",
          "error": "#525252",
        },
      },
    ],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui"), require('tailwindcss-logical'), require('tailwindcss-fluid-type'),],
}
