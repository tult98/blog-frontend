import type { NextPage } from 'next'
import BlogContainer from '~/components/modules/Blog/BlogContainer'
import TabHeader from '~/components/widgets/TabHeader'

const Home: NextPage = () => {
  // const { data, error, loading } = useQuery(ME)

  return (
    <>
      <TabHeader name="Blogs" />
      <div className="relative flex flex-col items-center min-h-screen">
        <BlogContainer />
      </div>
    </>
  )
}

export default Home
