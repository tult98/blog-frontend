import type { NextPage } from 'next'
import Link from 'next/link'
import TabHeader from '~/components/widgets/TabHeader'

const Home: NextPage = () => {
  return (
    <div>
      <TabHeader />

      <main className="min-h-screen bg-navy font-calibre">
        <div className="flex flex-col items-center center">
          <h1 className="text-5xl font-bold uppercase text-green">
            Coming Soon
          </h1>
          <p className="text-2xl font-sfmono text-slate-lightest">
            Website is under construction
          </p>
          <p className="text-center font-sfmono text-slate-lightest">
            This is a blog where I can share my knowledge, plus showing my
            portfolio to the world.
          </p>
          <div className="mt-12">
            <a
              href="https://www.linkedin.com/in/tu-le-thanh1505/"
              target="_blank"
              className="styled-btn"
            >
              Get in touch
            </a>
            <Link href="/portfolio">
              <a className="ml-6 styled-btn">See my portfolio</a>
            </Link>
          </div>
        </div>
      </main>

      {/* TODO: footer for the site */}
    </div>
  )
}

export default Home
