import Head from "next/head";
import Research from "../components/Research";
import PageFooterCTA from "../components/PageFooterCTA";

export default function ResearchPage() {
  return (
    <>
      <Head>
        <title>Research — Shubham Gajjar</title>
        <meta
          name="description"
          content="Published papers, working drafts, and ongoing research in medical AI by Shubham Gajjar."
        />
      </Head>
      <main className="pt-[88px]">
        <Research />
        <PageFooterCTA />
      </main>
    </>
  );
}
