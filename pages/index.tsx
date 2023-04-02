import { useQuery } from '@apollo/client'
import type { NextPage } from 'next'
import Header from '~/components/layouts/Dashboard/Header'
import BlogContainer from '~/components/modules/Blog/BlogContainer'
import TabHeader from '~/components/widgets/TabHeader'
import { ME } from '~/queries/auth'

const Home: NextPage = () => {
  // @ts-expect-error
  const { data, error, loading } = useQuery(ME)

  return (
    <>
      <TabHeader name="Blogs" />
      <div className="relative flex flex-col items-center min-h-screen font-sourceSansPro">
        <Header />
        <BlogContainer />
      </div>
    </>
  )
}

export default Home
