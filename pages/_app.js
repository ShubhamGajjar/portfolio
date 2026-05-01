// pages/_app.js
import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Head from "next/head";
import { useRef } from "react";
import { Nunito, Lora, JetBrains_Mono } from "next/font/google";
import Chatbot from "../components/Chatbot";

const fontSans = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-sans",
  display: "swap",
});

const fontDisplay = Nunito({
  subsets: ["latin"],
  weight: ["800", "900"],
  variable: "--font-display",
  display: "swap",
});

const fontSerif = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export default function App({ Component, pageProps }) {
  const chatToggleRef = useRef(null);

  const enhancedPageProps = {
    ...pageProps,
    chatToggleRef,
  };

  return (
    <>
      <Head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="alternate icon" href="/favicon.ico" />
      </Head>
      <div
        className={`${fontSans.variable} ${fontDisplay.variable} ${fontSerif.variable} ${fontMono.variable} antialiased`}
      >
        <Component {...enhancedPageProps} />
        <Chatbot onToggleRef={chatToggleRef} />
      </div>
      <Analytics />
      <SpeedInsights />
    </>
  );
}
