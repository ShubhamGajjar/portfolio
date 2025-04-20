// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Crucial for theme switching
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    // Include App Router if you use it, though not present in initial structure
    // './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Add custom theme extensions here if needed later
      // e.g., custom colors, fonts, animations
    },
  },
  plugins: [],
}