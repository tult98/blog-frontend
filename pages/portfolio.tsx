import Portfolio from '~/components/screens/Portfolio'
import TabHeader from '~/components/widgets/TabHeader'

const PortfolioPage = () => {
  return (
    <div>
      <TabHeader name="Portfolio" />
      <main className="bg-navy">
        <Portfolio />
      </main>
    </div>
  )
}

export default PortfolioPage
