const Navigation = () => {
  return (
    <ul className="flex flex-row text-slate-light font-sfmono">
      <li className="portfolio-navigation-item animate-fadeIn">
        <span className="text-xs text-green">01. </span> About
      </li>
      <li className="animation-delay-100 portfolio-navigation-item animate-fadeIn">
        <span className="text-xs text-green">02. </span>Skills
      </li>
      <li className="animation-delay-200 portfolio-navigation-item animate-fadeIn">
        <span className="text-xs text-green">03. </span>Work
      </li>
      <li className="animation-delay-300 portfolio-navigation-item animate-fadeIn">
        <span className="text-xs text-green">04. </span>Contact
      </li>
      <div className="flex flex-row items-center ml-4 text-base border rounded-sm opacity-0 cursor-pointer animation-delay-400 animate-fadeIn border-green text-green text-small">
        <div className="flex items-center w-full h-full px-4 text-justify hover:animate-fadeInButton">
          Resume
        </div>
      </div>
    </ul>
  )
}

export default Navigation
