import type { NextPage } from 'next'
import Link from 'next/link'
import TabHeader from '~/components/widgets/TabHeader'

const Home: NextPage = () => {
  return (
    <div>
      <TabHeader />

      <main className="min-h-screen bg-navy font-calibre">
        <div className="flex flex-col items-center w-4/5 center md:w-auto">
          <h1 className="text-4xl font-bold uppercase md:text-5xl text-green">
            Coming Soon
          </h1>
          <p className="text-xl text-center md:text-left md:text-2xl font-sfmono text-slate-lightest">
            Website is under construction
          </p>
          <p className="text-sm text-center font-sfmono text-slate-lightest md:text-base">
            This is a blog where I can share my knowledge, plus showing my
            portfolio to the world.
          </p>
          <div className="flex flex-col mt-12 md:flex-row">
            <a
              href="https://www.linkedin.com/in/tu-le-thanh1505/"
              target="_blank"
              className="flex flex-row items-center justify-center text-sm styled-btn md:text-base"
            >
              Get in touch
            </a>
            <Link href="/portfolio">
              <a className="flex flex-row items-center justify-center md:ml-6 styled-btn tex-sm md:text-base">
                See my portfolio
              </a>
            </Link>
          </div>
        </div>
      </main>

      {/* TODO: footer for the site */}
    </div>
  )
}

export default Home
