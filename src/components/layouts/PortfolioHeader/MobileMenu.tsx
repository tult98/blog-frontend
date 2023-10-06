interface Props {
  isOpen: boolean
  shouldAnimate: boolean
  backgroundColor?: string
  items: React.ReactNode
  customStyle?: string
}

const MobileMenu = ({
  isOpen,
  shouldAnimate,
  backgroundColor = 'bg-navy-light',
  items,
  customStyle = 'md:static md:bg-transparent md:w-auto md:h-auto md:flex md:flex-row',
}: Props) => {
  return (
    <>
      <ul
        className={`fixed top-0 left-full z-20 flex flex-col items-center justify-center w-4/5 h-screen text-slate-light font-sfmono ${
          shouldAnimate ? (isOpen ? 'animate-fadeInFromRight' : 'animate-fadeOutFromRight') : ''
        } ${backgroundColor} ${customStyle}`}
      >
        {items}
      </ul>
    </>
  )
}

export default MobileMenu
