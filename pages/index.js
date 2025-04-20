import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Shubham Gajjar | Resume</title>
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center px-4 py-10">
        <h1 className="text-4xl font-bold mb-4">Hi, I'm Shubham Gajjar 👋</h1>
        <p className="text-lg text-gray-700 mb-6 text-center max-w-xl">
          I’m passionate about AI, ML, and Deep Learning. Here’s my creative resume site – feel free to download my full resume below!
        </p>
        <a
          href="/Shubham_Gajjar_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition-all"
        >
          📄 Download Resume
        </a>
      </main>
    </>
  )
}
