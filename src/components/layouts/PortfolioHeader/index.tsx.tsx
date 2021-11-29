import Logo from '~/components/elements/Logo'
import Navigation from '~/components/layouts/PortfolioHeader/Navigation'

const PortfolioHeader = () => {
  return (
    <div className="flex flex-row items-center justify-between h-24 px-10">
      <Logo />
      <Navigation />
    </div>
  )
}

export default PortfolioHeader
