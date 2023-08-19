import Link from 'next/link'
import Icon from '~/components/elements/Icon'

const Navigation = () => {
  return (
    <nav className="flex flex-row items-center">
      <ul className="flex flex-row list-none !m-0">
        <li className="!px-5 mb-0 text-base text-text">
          <Link href="/posts">Latest</Link>
        </li>
        <li className="!px-5 text-text mb-0">
          <Link href="/posts" className="flex flex-row items-center space-x-2">
            <p className="text-base">Posts</p>
            <Icon name="chevronDown" style="w-4 h-4 translate-y-0.5" />
          </Link>
        </li>
        <li className="!px-5 text-text mb-0 text-base">
          <Link href="/portfolio">About</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
