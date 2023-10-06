import { useState } from 'react'

const usePortfolioNavigation = () => {
  const [navigationItemsStatus, setNavigationItemStatus] = useState<Record<string, boolean>>({
    about: false,
    experience: false,
    work: false,
    contact: false,
  })

  const onSwitchSection = (sectionName: string) => {
    const updated: Record<string, boolean> = {}
    Object.keys(navigationItemsStatus).forEach((key) => {
      updated[key] = false
    })
    updated[sectionName] = true
    setNavigationItemStatus(updated)
  }

  return { navigationItemsStatus, onSwitchSection }
}

export default usePortfolioNavigation
