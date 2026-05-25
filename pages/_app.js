// pages/_app.js
import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import { Nunito, Lora, JetBrains_Mono } from "next/font/google";
import Navbar from "../components/Navbar";
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

const PAGE_TRANSITION = {
  duration: 0.45,
  ease: [0.32, 0.72, 0, 1],
};

// Visual left-to-right order, matching the navbar layout:
// Brand (home) | About · Work · Research · Projects · Contact (right-most)
// Contact links to /#contact which routes to "/", so it gets its own slot here
// so clicking it from a detail page still feels like moving rightward in the nav.
const ROUTE_ORDER = ["/", "/about", "/work", "/research", "/projects"];
const CONTACT_INDEX = ROUTE_ORDER.length; // 5 — past projects

function getRouteIndex(url) {
  if (!url) return 0;
  if (url.includes("#contact")) return CONTACT_INDEX;
  const path = url.split("?")[0].split("#")[0];
  const i = ROUTE_ORDER.indexOf(path);
  return i === -1 ? 0 : i;
}

// Framer Motion variants accept the `custom` value (direction here).
// direction > 0  → forward (right of current in the nav) → new comes in from right
// direction < 0  → backward → new comes in from left
const slideVariants = {
  enter: (direction) => ({ x: direction >= 0 ? "100%" : "-100%" }),
  center: { x: 0 },
  exit: (direction) => ({ x: direction >= 0 ? "-100%" : "100%" }),
};

export default function App({ Component, pageProps }) {
  const chatToggleRef = useRef(null);
  const router = useRouter();
  const [direction, setDirection] = useState(1);

  // routeChangeStart fires *before* the new page renders, so the direction is
  // already up-to-date when AnimatePresence reads `custom`.
  useEffect(() => {
    const handle = (targetUrl) => {
      const target = getRouteIndex(targetUrl);
      const current = getRouteIndex(router.asPath);
      if (target > current) setDirection(1);
      else if (target < current) setDirection(-1);
      // target === current → keep prior direction (e.g. clicking the same link)
    };
    router.events.on("routeChangeStart", handle);
    return () => router.events.off("routeChangeStart", handle);
  }, [router]);

  return (
    <>
      <Head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="alternate icon" href="/favicon.ico" />
      </Head>
      <div
        className={`${fontSans.variable} ${fontDisplay.variable} ${fontSerif.variable} ${fontMono.variable} antialiased`}
      >
        <Navbar onChatToggle={() => chatToggleRef.current?.()} />

        {/* Route transitions: direction-aware x-axis slide. The page coming "from
            the right" in nav order (Projects vs Home → forward) slides in from
            the right; clicking a leftward nav item slides the new page in from
            the left. mode="popLayout" runs old + new concurrently; the outer
            overflow-x-clip stops the off-screen slide from triggering a
            horizontal scrollbar. Keyed by pathname (not asPath) so hash-only
            navigation like /#contact while already on / doesn't re-animate. */}
        <div className="relative overflow-x-clip">
          <AnimatePresence mode="popLayout" initial={false} custom={direction}>
            <motion.div
              key={router.pathname}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={PAGE_TRANSITION}
              className="relative z-[1] will-change-transform"
            >
              <Component {...pageProps} />
            </motion.div>
          </AnimatePresence>
        </div>

        <Chatbot onToggleRef={chatToggleRef} />
      </div>
      <Analytics />
      <SpeedInsights />
    </>
  );
}
