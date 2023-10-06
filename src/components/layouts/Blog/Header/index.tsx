import { useMemo, useState } from 'react'
import Icon from '~/components/elements/Icon'
import Logo from '~/components/layouts/Blog/Header/Logo'
import Navigation from '~/components/layouts/Blog/Header/Navigation'
import MobileMenu from '~/components/layouts/PortfolioHeader/MobileMenu'

const Header = ({ disableWave = false, title }: { disableWave?: boolean; title?: string }) => {
  const [isOpen, setIsOpen] = useState(false)

  const onToggleMobileMenu = () => setIsOpen(!isOpen)

  const items = useMemo(
    () => (
      <nav className="absolute left-0 top-[100px] w-[75%] height-[75%] justify-between">
        <li className="py-4 pl-8 pr-4 text-[28px] font-medium text-text">Latest</li>
        <li className="py-4 pl-8 pr-4 text-[28px] font-medium text-text">Posts</li>
        <li className="py-4 pl-8 pr-4 text-[28px] font-medium text-text">About</li>
      </nav>
    ),
    [],
  )

  return (
    <div
      className={`lg:h-[400px] ${
        title ? 'h-[400px]' : 'h-[200px]'
      } w-full bg-gradient-to-r from-homepage-dark to-homepage-light relative flex flex-col justify-between items-center`}
    >
      <header className="flex flex-row lg:mt-12 mt-4 px-4 lg:px-0 h-fit max-w-[1100px] lg:space-x-6 w-full justify-between lg:justify-start">
        <Logo />
        <Navigation />
        <Icon
          name={`${isOpen ? 'close' : 'menu'}`}
          style="w-8 h-8 text-gray-1000 lg:hidden z-30 hover:cursor-pointer"
          onClick={onToggleMobileMenu}
        />
        <MobileMenu
          isOpen={isOpen}
          shouldAnimate={true}
          items={items}
          backgroundColor="bg-[#FFFCFC]"
          customStyle="!z-20 !w-full !font-sans lg:hidden"
        />
      </header>
      {title && (
        <div className="pb-[36px] w-full max-w-[1100px] px-4 lg:px-0">
          <h1 className="pb-4 text-[2.375rem] text-gray-1000 font-medium">{title}</h1>
        </div>
      )}
      {!disableWave && (
        <div className="absolute left-0 right-0 bottom-0 w-full h-[90px] z-10 overflow-x-hidden">
          <svg
            preserveAspectRatio="none"
            width="1440"
            height="74"
            viewBox="0 0 1440 74"
            className="absolute left-[-3%] right-[-3%] bottom-0 w-[103%] text-white min-w-[600px]"
            fill="currentColor"
          >
            <path d="M456.464 0.0433865C277.158 -1.70575 0 50.0141 0 50.0141V74H1440V50.0141C1440 50.0141 1320.4 31.1925 1243.09 27.0276C1099.33 19.2816 1019.08 53.1981 875.138 50.0141C710.527 46.3727 621.108 1.64949 456.464 0.0433865Z"></path>
          </svg>
        </div>
      )}
    </div>
  )
}

export default Header
