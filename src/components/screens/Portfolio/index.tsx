import ContactInfoItem from '~/components/elements/ContactInfoItem'
import PortfolioHeader from '~/components/layouts/PortfolioHeader/index.tsx'
import ContactInfoContainer from '~/components/widgets/ContactInfoContainer'
import PortfolioIntroduce from '~/components/widgets/PortfolioIntroduce'

interface ISocialAccount {
  name: string
  url: string
}

const Portfolio = () => {
  const socialAccounts = [
    {
      name: 'github',
      url: 'https://github.com/lethanhtupk',
    },
    {
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/tu-le-thanh1505/',
    },
    ,
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
    <section className="min-h-screen pb-10 bg-navy">
      <PortfolioHeader />
      <PortfolioIntroduce />
      <ContactInfoContainer style="left-5 bottom-0">
        <div className="flex flex-col items-center opacity-0 animate-appear animation-delay-2s3">
          {socialAccounts.map((item, index) => (
            <ContactInfoItem key={index} name={item.name} url={item.url} />
          ))}
          <div className="w-px h-24 bg-slate-light"></div>
        </div>
      </ContactInfoContainer>
      <ContactInfoContainer style="right-5 bottom-0">
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
