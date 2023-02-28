import { useQuery } from '@apollo/client'
import type { NextPage } from 'next'
import BlogHeader from '~/components/layouts/BlogHeader'
import BlogContainer from '~/components/modules/Blog/BlogContainer'
import TabHeader from '~/components/widgets/TabHeader'
import { ME } from '~/queries/auth'

const Home: NextPage = () => {
  // @ts-expect-error
  const { data, error, loading } = useQuery(ME)

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
