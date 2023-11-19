/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'user-avatar': "url('/src/assets/images/user.png')",
      },
    },
  },
  plugins: [],
}