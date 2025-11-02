// pages/_app.js
import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Head from "next/head";
import { useState, useEffect, useRef } from "react";
import Chatbot from "../components/Chatbot";

export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState("light"); // Default to light
  const chatToggleRef = useRef(null);

  // Effect to apply theme class and persist choice
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    // Determine initial theme: localStorage > default ('light')
    let initialTheme;
    if (storedTheme) {
      // User has explicitly chosen a theme before
      initialTheme = storedTheme;
    } else {
      // First time user - default to light mode
      initialTheme = "light";
    }

    setTheme(initialTheme); // Set state

    if (initialTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []); // Run only once on mount to initialize

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      // Update class on <html>
      if (newTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      // Update localStorage
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  // Pass theme, toggle function, and chat toggle ref to all pages
  const enhancedPageProps = {
    ...pageProps,
    theme,
    toggleTheme,
    chatToggleRef,
  };

  return (
    <>
      <Head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="alternate icon" href="/favicon.ico" />
      </Head>
      <Component {...enhancedPageProps} /> {/* Pass props down */}
      <Chatbot onToggleRef={chatToggleRef} />
      <Analytics />
      <SpeedInsights />
    </>
  );
}
