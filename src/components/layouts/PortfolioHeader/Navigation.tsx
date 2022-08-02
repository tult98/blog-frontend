import { useState } from 'react'
import Icon from '~/components/elements/Icon'
import ResumeViewer from '~/components/widgets/ResumeViewer'
import MobileMenu from './MobileMenu'
import PCMenu from './PCMenu'

interface Props {
  iconColor?: string
  backgroundColor?: string
  items: React.ReactNode
  isShowResume?: boolean
  onCloseResume?: () => void
  onSwitchSection: (sectionName: string) => void
}

const Navigation = ({
  onSwitchSection,
  iconColor = 'text-green',
  backgroundColor,
  items,
  isShowResume,
  onCloseResume,
}: Props) => {
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
          backgroundColor={backgroundColor}
          items={items}
        />
      </div>
      <div className="hidden md:block">
        <PCMenu onSwitchSection={onSwitchSection} />
      </div>
      <Icon
        name={isOpenMenu ? 'close' : 'menu'}
        style={`w-8 h-8 ${iconColor} ${
          isOpenMenu ? 'fixed' : 'absolute'
        } right-4 block md:hidden z-20 hover:cursor-pointer`}
        onClick={onToggleMenu}
      />
      {isShowResume && <ResumeViewer onClose={onCloseResume!} />}
    </>
  )
}

export default Navigation
