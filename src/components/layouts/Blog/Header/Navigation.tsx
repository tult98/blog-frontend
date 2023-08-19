import Link from 'next/link'

const Navigation = () => {
  return (
    <nav className="flex flex-row items-center">
      <ul className="flex flex-row list-none !m-0">
        <li className="!px-5 mb-0 text-base text-text">
          <Link href="/posts">Latest</Link>
        </li>
        <li className="!px-5 text-text mb-0 text-base">
          <Link href="/posts">Posts</Link>
        </li>
        <li className="!px-5 text-text mb-0 text-base">
          <Link href="/portfolio">About</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
