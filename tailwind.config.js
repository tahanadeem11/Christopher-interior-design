/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand colors
        primary: '#1A403B',    // Dark teal
        secondary: '#57504E',  // Dark gray
        accent: '#B5A287',     // Warm beige
        light: '#D6D5C9',      // Light beige
        dark: '#1A403B',       // Same as primary for consistency
        'off-white': '#F8F8F8' // Off white
      },
      fontFamily: {
        sans: ['var(--font-josefin-sans)'],
        serif: ['var(--font-cormorant)'],
        display: ['var(--font-cormorant)'],
      },
    },
  },
  plugins: [],
}
