/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,mdx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
      },
      colors: {
        ink: '#0A1F5C',      // deep navy - secondary accent, footer, dark chrome
        accent: '#185FA5',   // muted blue - primary accent everywhere else
        paper: '#FFFFFF',
        mist: '#F7FAFD',     // faint blue-white, used for gradient sections
        muted: '#5B6B82',    // muted body/secondary text, softer than pure black
      },
      maxWidth: {
        prose: '70ch',
      },
    },
  },
  plugins: [],
};
