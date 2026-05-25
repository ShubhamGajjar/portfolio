import Head from "next/head";
import Experience from "../components/Experience";
import PageFooterCTA from "../components/PageFooterCTA";

export default function WorkPage() {
  return (
    <>
      <Head>
        <title>Work — Shubham Gajjar</title>
        <meta
          name="description"
          content="Engineering roles, research positions, and teaching experience by Shubham Gajjar."
        />
      </Head>
      <main className="pt-[88px]">
        <Experience />
        <PageFooterCTA />
      </main>
    </>
  );
}
