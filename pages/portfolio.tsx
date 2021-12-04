import Portfolio from '~/components/screens/Portfolio'
import TabHeader from '~/components/widgets/TabHeader'

const PortfolioPage = () => {
  return (
    <div className="font-calibre">
      <TabHeader name="Portfolio" />
      <main className="overflow-y-auto portfolio-sidebar">
        <Portfolio />
      </main>
    </div>
  )
}

export default PortfolioPage
