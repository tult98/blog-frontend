import Logo from '~/components/elements/Logo'
import Navigation from '~/components/layouts/PortfolioHeader/Navigation'

interface Props {
  onSwitchSection: (sectionName: string) => void
}

const PortfolioHeader = ({ onSwitchSection }: Props) => {
  return (
    <div className="flex flex-row items-center justify-between h-24 px-10">
      <Logo />
      <Navigation onSwitchSection={onSwitchSection} />
    </div>
  )
}

export default PortfolioHeader
