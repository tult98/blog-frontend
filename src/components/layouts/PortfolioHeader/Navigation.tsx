import { useState } from 'react'
import Icon from '~/components/elements/Icon'
import MobileMenu from './MobileMenu'
import PCMenu from './PCMenu'

const Navigation = ({
  onSwitchSection,
}: {
  onSwitchSection: (sectionName: string) => void
}) => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false)
  const [shouldAnimate, setShouldAnimate] = useState<boolean>(false)

  const onToggleMenu = () => {
    setIsOpenMenu(!isOpenMenu)
    if (!shouldAnimate) {
      setShouldAnimate(true)
    }
  }

  return (
    <>
      <div className="md:hidden">
        <MobileMenu
          isOpen={isOpenMenu}
          shouldAnimate={shouldAnimate}
          onSwitchSection={onSwitchSection}
        />
      </div>
      <div className="hidden md:block">
        <PCMenu onSwitchSection={onSwitchSection} />
      </div>
      <Icon
        name="menu"
        style="w-8 h-8 text-green absolute right-4 block md:hidden z-20"
        onClick={onToggleMenu}
      />
    </>
  )
}

export default Navigation
