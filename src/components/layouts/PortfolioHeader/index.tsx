import { useState } from 'react'
import Logo from '~/components/elements/Logo'
import Navigation from '~/components/layouts/PortfolioHeader/Navigation'

interface Props {
  onSwitchSection: (sectionName: string) => void
}

const PortfolioHeader = ({ onSwitchSection }: Props) => {
  const [isShowResume, setIsShowResume] = useState(false)

  const onShowResume = () => {
    setIsShowResume(true)
  }

  const onCloseResume = () => {
    setIsShowResume(false)
  }

  const renderItems = () => {
    return (
      <ul className="flex flex-col items-center list-none">
        <li
          onClick={() => onSwitchSection('about')}
          className="min-w-150px md:min-w-min md:portfolio-navigation-item portfolio-navigation-item-sm animate-fadeIn max-md:animate-none"
        >
          <span className="text-base md:text-xs text-green">01. </span> About
        </li>
        <li
          onClick={() => onSwitchSection('experience')}
          className="min-w-150px md:min-w-min animation-delay-100 md:portfolio-navigation-item portfolio-navigation-item-sm animate-fadeIn max-md:animate-none"
        >
          <span className="text-base md:text-xs text-green">02. </span>
          Experience
        </li>
        <li
          onClick={() => onSwitchSection('work')}
          className="min-w-150px md:min-w-min animation-delay-200 md:portfolio-navigation-item portfolio-navigation-item-sm animate-fadeIn max-md:animate-none"
        >
          <span className="text-base md:text-xs text-green">03. </span>Work
        </li>
        <li
          onClick={() => onSwitchSection('contact')}
          className="min-w-150px md:min-w-min animation-delay-300 md:portfolio-navigation-item portfolio-navigation-item-sm animate-fadeIn max-md:animate-none"
        >
          <span className="text-base md:text-xs text-green">04. </span>
          Contact
        </li>
        <div
          onClick={onShowResume}
          className="flex flex-row items-center mt-4 border rounded-sm opacity-100 cursor-pointer md:mt-0 md:ml-4 md:opacity-0 animation-delay-400 animate-fadeIn max-md:animate-none border-green text-green"
        >
          <div className="flex items-center w-full h-full px-8 py-3 text-lg text-justify md:text-small md:px-4 md:py-2 hover:animate-fadeInButton">
            Resume
          </div>
        </div>
      </ul>
    )
  }

  return (
    <div className="flex flex-row items-center justify-between h-24 px-10">
      <Logo />
      <Navigation
        items={renderItems()}
        isShowResume={isShowResume}
        onCloseResume={onCloseResume}
        onSwitchSection={onSwitchSection}
      />
    </div>
  )
}

export default PortfolioHeader
