interface Props {
  isOpen: boolean
  shouldAnimate: boolean
  backgroundColor?: string
  items: React.ReactNode
}

const MobileMenu = ({
  isOpen,
  shouldAnimate,
  backgroundColor = 'bg-navy-light',
  items,
}: Props) => {
  return (
    <>
      <ul
        className={`fixed top-0 left-full z-10 flex flex-col items-center justify-center w-4/5 h-screen md:static ${backgroundColor} md:bg-transparent md:w-auto md:h-auto md:flex md:flex-row text-slate-light font-sfmono ${
          shouldAnimate
            ? isOpen
              ? 'animate-fadeInFromRight'
              : 'animate-fadeOutFromRight'
            : ''
        }`}
      >
        {items}
      </ul>
    </>
  )
}

export default MobileMenu
