import type { NextPage } from 'next'
import TabHeader from '~/src/components/widgets/TabHeader'
// import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div>
      <TabHeader />

      <main>Home page</main>

      {/* <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}

      {/* TODO: footer for the site */}
    </div>
  )
}

export default Home
