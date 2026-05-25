import Head from "next/head";
import Projects from "../components/Projects";
import PageFooterCTA from "../components/PageFooterCTA";

export default function ProjectsPage() {
  return (
    <>
      <Head>
        <title>Projects — Shubham Gajjar</title>
        <meta
          name="description"
          content="Engineering projects, side builds, and experiments by Shubham Gajjar."
        />
      </Head>
      <main className="pt-[88px]">
        <Projects />
        <PageFooterCTA />
      </main>
    </>
  );
}
