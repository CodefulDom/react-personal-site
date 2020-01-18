import Link from 'next/link'

const Home = () => {
  return (
    <div className="container">
      <h1>Hello Next.js 👋</h1>
      <Link href="/about">
        <a>About</a>
      </Link>
    </div>
  )
}

export default Home
