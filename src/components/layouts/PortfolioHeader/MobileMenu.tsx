const MobileMenu = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <ul
      className={`fixed top-0 right-0 z-10 flex flex-col items-center justify-center w-4/5 h-screen md:static bg-navy-light md:bg-transparent md:w-auto md:h-auto md:flex md:flex-row text-slate-light font-sfmono ${
        isOpen ? 'animate-fadeInFromRight' : 'animate-fadeOutFromRight'
      }`}
    >
      <li className="min-w-150px md:min-w-min md:portfolio-navigation-item portfolio-navigation-item-sm animate-fadeIn max-md:animate-none">
        <span className="text-base md:text-xs text-green">01. </span> About
      </li>
      <li className="min-w-150px md:min-w-min animation-delay-100 md:portfolio-navigation-item portfolio-navigation-item-sm animate-fadeIn max-md:animate-none">
        <span className="text-base md:text-xs text-green">02. </span>
        Skills
      </li>
      <li className="min-w-150px md:min-w-min animation-delay-200 md:portfolio-navigation-item portfolio-navigation-item-sm animate-fadeIn max-md:animate-none">
        <span className="text-base md:text-xs text-green">03. </span>Work
      </li>
      <li className="min-w-150px md:min-w-min animation-delay-300 md:portfolio-navigation-item portfolio-navigation-item-sm animate-fadeIn max-md:animate-none">
        <span className="text-base md:text-xs text-green">04. </span>
        Contact
      </li>
      <div className="flex flex-row items-center mt-4 border rounded-sm opacity-100 cursor-pointer md:mt-0 md:ml-4 md:opacity-0 animation-delay-400 animate-fadeIn max-md:animate-none border-green text-green">
        <div className="flex items-center w-full h-full px-8 py-3 text-lg text-justify md:text-small md:px-4 md:py-2 hover:animate-fadeInButton">
          Resume
        </div>
      </div>
    </ul>
  )
}

export default MobileMenu
