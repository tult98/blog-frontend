import Image from 'next/image'
import Link from 'next/link'
import { useRecoilState } from 'recoil'
import Icon from '~/components/elements/Icon'
import { searchModalState } from '~/recoil/atoms/searchModalState'

const Header = () => {
  const [modalState, setModalState] = useRecoilState(searchModalState)

  const onSearch = () => {
    setModalState({ isOpen: true })
  }

  return (
    <header className="mb-[33px] sticky top-0 z-10 w-full bg-white">
      <div className="max-w-[1220px] w-full h-[72px] px-10 grid grid-cols-2 sm:grid-cols-4 items-center justify-between">
        <Link className="col-span-1 hover:cursor-pointer" href="/">
          <Image src="/blog-logo.png" alt="blog-logo" width={120} height={100} />
        </Link>
        {!modalState.isOpen && (
          <div className="relative col-span-2 py-3 overflow-hidden border border-gray-300 rounded whitespace-nowrap hidden sm:inline-block">
            <Icon name="search" style="w-6 h-6 absolute top-1/2 -translate-y-1/2 left-4 text-[#3E34F3]" />
            <input
              type="text"
              onClick={onSearch}
              placeholder="Type here to search"
              className="pl-12 pr-4 rounded focus:outline-none min-w-[15rem] lg:min-w-[30rem] w-full"
            />
          </div>
        )}
        <div className="col-span-1 flex justify-end">
          <Icon name="menu" style="w-8 h-8 sm:hidden" />
        </div>
      </div>
      {/* search bar for mobile */}
      <div className="w-full px-10 mt-3 relative">
        <Icon name="search" style="w-6 h-6 absolute top-1/2 -translate-y-1/2 left-14 text-[#3E34F3]" />
        <input
          type="text"
          onClick={onSearch}
          placeholder="Type here to search"
          className="sm:hidden pr-4 pl-12 py-3 border border-gray-300 rounded w-full focus:outline-none"
        />
      </div>
    </header>
  )
}

export default Header
