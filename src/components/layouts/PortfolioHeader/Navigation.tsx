const Navigation = () => {
  return (
    <ul className="flex flex-row text-slate-light font-sfmono">
      <li className="portfolio-navigation-item">
        <span className="text-xs text-green">01. </span> About
      </li>
      <li className="portfolio-navigation-item">
        <span className="text-xs text-green">02. </span>Skills
      </li>
      <li className="portfolio-navigation-item">
        <span className="text-xs text-green">03. </span>Work
      </li>
      <li className="portfolio-navigation-item">
        <span className="text-xs text-green">04. </span>Contact
      </li>
      <li className="flex flex-row items-center px-4 ml-4 text-base border rounded-sm cursor-pointer hover:animate-fadeInButton border-green text-green text-small">
        Resume
      </li>
    </ul>
  )
}

export default Navigation
