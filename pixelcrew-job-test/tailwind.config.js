export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#D1F864',
        secondary: '#216545',
        neutral: '#D4D8D9',
        dark: '#1C1C1C',
        support: '#FFFFFF',
      },
      fontFamily: {
        serif: ['"MADE Dillan"', 'serif'],
        sans: ['Lexend', 'sans-serif'],
        lexend: ['Lexend', 'sans-serif'],
      },
      screens: {
        'sm': '640px', 
        'md': '768px', 
        'lg': '1024px',
        'xl': '1280px',
        'mac': '1440px',
        'xxl': '1536px',
        'xxxl': '1900px',
      },
    },
  },
}
