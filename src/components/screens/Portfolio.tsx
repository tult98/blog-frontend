import ContactInfoItem from '~/components/elements/ContactInfoItem'
import PortfolioHeader from '~/components/layouts/PortfolioHeader'
import AboutMe from '~/components/modules/Portfolio/AboutMe'
import ContactInfoContainer from '~/components/modules/Portfolio/ContactInfoContainer'
import Experience from '~/components/modules/Portfolio/Experience'
import Footer from '~/components/modules/Portfolio/Footer'
import GetInTouch from '~/components/modules/Portfolio/GetInTouch'
import PortfolioIntroduce from '~/components/modules/Portfolio/PortfolioIntroduce'
import Work from '~/components/modules/Portfolio/Work'
import usePortfolioNavigation from '~/hooks/usePortfolioNavigation'

interface ISocialAccount {
  name: string
  url: string
}

const Portfolio = () => {
  const { navigationItemsStatus, onSwitchSection } = usePortfolioNavigation()

  const socialAccounts = [
    {
      name: 'github',
      url: 'https://github.com/tult98',
    },
    {
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/tu-le-thanh1505/',
    },
    {
      name: 'facebook',
      url: 'https://www.facebook.com/le.thanhtu.129',
    },
    {
      name: 'instagram',
      url: 'https://www.instagram.com/tu_tute15/',
    },
  ] as ISocialAccount[]

  return (
    <section className="bg-navy">
      <PortfolioHeader onSwitchSection={onSwitchSection} />
      <div className="w-4/5 mx-auto max-w-1000px lg:w-auto">
        <PortfolioIntroduce onSwitchSection={onSwitchSection} />
        <AboutMe isInView={navigationItemsStatus.about} />
        <Experience isInView={navigationItemsStatus.experience} />
        <Work isInView={navigationItemsStatus.work} />
        <GetInTouch isInView={navigationItemsStatus.contact} />
        <Footer />
      </div>
      <ContactInfoContainer style="left-5 bottom-0 hidden md:block">
        <div className="flex flex-col items-center opacity-0 animate-appear animation-delay-2s3">
          {socialAccounts.map((item, index) => (
            <ContactInfoItem key={index} name={item.name} url={item.url} />
          ))}
          <div className="w-px h-24 bg-slate-light"></div>
        </div>
      </ContactInfoContainer>
      <ContactInfoContainer style="right-5 bottom-0 hidden md:block">
        <div className="flex flex-col items-center opacity-0 animate-appear animation-delay-2s3">
          <p className="py-3 text-xs cursor-pointer text-slate-light font-sfmono vertical-rl hover:text-green hover:animate-slideUpLittle">
            lethanhtu1551998@gmail.com
          </p>
          <div className="w-px h-24 bg-slate-light"></div>
        </div>
      </ContactInfoContainer>
    </section>
  )
}

export default Portfolio
