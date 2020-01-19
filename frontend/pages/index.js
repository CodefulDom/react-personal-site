import Link from 'next/link'
import Head from 'next/head'

const Home = () => {
  return (
    <div className="container">
      <Head>
        <title>This page has a title 🤔</title>
        <meta charSet="utf-8" />
        <meta name="referrer" content="strict-origin" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1>Hello Next.js 👋</h1>
      <Link href="about">
        <a>About</a>
      </Link>
    </div>
  )
}

export default Home
