/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./screens/**/*.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        themeWhite: '#FFFFFF',
        themeGray: '#F5F5F5',
        themeClearGray: '#979797',
        themePlaceholder: '#D9D9D9',
        themePaleGreen: '#9DC6BB',
        themeGreen: '#64B4A1',
        themeDarkGreen: '#2B816B',
        themeLightBlue: '#D2E5E0',
        themeBlue: '#323778',
        themeNavyBlue: '#303464',
      },
    },
  },
  plugins: [],
}

