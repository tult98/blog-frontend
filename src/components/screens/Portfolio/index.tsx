import PortfolioHeader from '~/components/layouts/PortfolioHeader/index.tsx'
import PortfolioIntroduce from '~/components/widgets/PortfolioIntroduce'

const Portfolio = () => {
  return (
    <section className="pb-10 bg-navy">
      <PortfolioHeader />
      <PortfolioIntroduce />
    </section>
  )
}

export default Portfolio
