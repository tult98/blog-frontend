import Image from 'next/image'
import Link from 'next/link'
import Icon from '~/components/elements/Icon'
import SearchBar from '~/components/layouts/BlogHeader/SearchBar'

const Header = () => {
  return (
    <header className="mb-[33px] sticky top-0 z-10 w-full bg-white">
      <div className="max-w-[1220px] w-full h-[72px] px-10 grid grid-cols-4 items-center">
        <Link className="col-span-1 hover:cursor-pointer" href="/">
          <Image src="/blog-logo.png" alt="blog-logo" width={120} height={100} />
        </Link>
        <SearchBar />
        <Icon name="menu" style="w-5 h-5 sm:hidden" />
      </div>
    </header>
  )
}

export default Header
