// pages/_app.js
import '../styles/globals.css'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { useState, useEffect } from 'react'

export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState('dark'); // Default to dark

  // Effect to apply theme class and persist choice
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    // Determine initial theme: localStorage > prefers-color-scheme > default ('dark')
    const initialTheme = storedTheme || (prefersDark ? 'dark' : 'light');
    setTheme(initialTheme); // Set state

    if (initialTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    // Store the explicitly chosen theme, or the derived initial theme
    localStorage.setItem('theme', initialTheme);

  }, []); // Run only once on mount to initialize


  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      // Update class on <html>
      if (newTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      // Update localStorage
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  };

  // Pass theme and toggle function to all pages
  const enhancedPageProps = {
    ...pageProps,
    theme,
    toggleTheme,
  };

  return (
    <>
      <Component {...enhancedPageProps} /> {/* Pass props down */}
      <SpeedInsights />
    </>
  )
}