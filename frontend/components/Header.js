import Link from 'next/link'

const Header = () => (
  <div>
    <div className="bar">
      <Link href="#">
        <a>CodefulDom</a>
      </Link>
    </div>
    <div className="sub-bar">
      <p>Search</p>
    </div>
    <div>Blog</div>
  </div>
)

export default Header
