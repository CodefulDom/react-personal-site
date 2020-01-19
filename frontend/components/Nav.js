import Link from 'next/link'

const Nav = () => (
  <div>
    <Link href="about">
      <a>About</a>
    </Link>
    <Link href="/">
      <a>Home</a>
    </Link>
  </div>
)

export default Nav
