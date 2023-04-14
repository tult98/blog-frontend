import Image from 'next/image'
import Icon from '~/components/elements/Icon'

const Header = () => {
  return (
    <header className="fixed top-0 z-10 justify-end sm:justify-center navbar bg-base-100">
      <div className="absolute left-8 hover:cursor-pointer">
        <Image src="/blog-logo.png" alt="blog-logo" width={120} height={100} />
      </div>
      <div className="relative py-1.5 form-control hidden sm:inline-block">
        <Icon name="search" style="w-6 h-6 absolute top-1/2 -translate-y-1/2 left-4 text-[#3E34F3]" />
        <input
          type="text"
          placeholder="What do you want to find?"
          className="pl-12 pr-4 rounded input input-bordered focus:outline-none min-w-[15rem] lg:min-w-[30rem]"
        />
      </div>
      <Icon name="menu" style="w-5 h-5 sm:hidden" />
    </header>
  )
}

export default Header
