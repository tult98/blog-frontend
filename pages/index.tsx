import type { NextPage } from 'next'
import TabHeader from '~/components/widgets/TabHeader'

const Home: NextPage = () => {
  return (
    <div>
      <TabHeader />

      <main className="text-2xl text-red-500">Home page</main>

      {/* TODO: footer for the site */}
    </div>
  )
}

export default Home
