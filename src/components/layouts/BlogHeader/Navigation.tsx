import { useState } from 'react'
import Icon from '~/components/elements/Icon'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  const onToggleNavigation = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <Icon
        name="menu"
        style="w-6 h-6 cursor-pointer"
        onClick={onToggleNavigation}
      />
    </div>
  )
}

export default Navigation
