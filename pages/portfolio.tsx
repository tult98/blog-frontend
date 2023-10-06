import Portfolio from '~/components/screens/Portfolio'
import TabHeader from '~/components/widgets/TabHeader'

const PortfolioPage = () => {
  return (
    <div className="w-full font-calibre">
      <TabHeader name="Portfolio" />
      <main>
        <Portfolio />
      </main>
    </div>
  )
}

export default PortfolioPage
