import Head from "next/head";
import About from "../components/About";
import Skills from "../components/Skills";
import Certificates from "../components/Certificates";
import Badges from "../components/Badges";
import PageFooterCTA from "../components/PageFooterCTA";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About — Shubham Gajjar</title>
        <meta
          name="description"
          content="About Shubham Gajjar — M.S. AI at Northeastern, published researcher, full-stack engineer. Stack, certifications, and credentials."
        />
      </Head>
      <main className="pt-[88px]">
        <About variant="full" />
        <Skills />
        <Certificates />
        <Badges />
        <PageFooterCTA />
      </main>
    </>
  );
}
