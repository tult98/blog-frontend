import type { NextPage } from 'next'
import TabHeader from '~/components/widgets/TabHeader'
import BlogContainer from '~/components/modules/Blog/BlogContainer'
import BlogHeader from '~/components/layouts/BlogHeader'

const Home: NextPage = () => {
  return (
    <>
      <TabHeader name="Blogs" />
      <div>
        <main className="relative flex flex-col items-center min-h-screen">
          <BlogHeader />
          <BlogContainer />
        </main>
      </div>
    </>
  )
}

export default Home
