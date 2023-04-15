import type { NextPage } from 'next'
import BlogContainer from '~/components/modules/Blog/BlogContainer'
import TabHeader from '~/components/widgets/TabHeader'

const Home: NextPage = () => {
  return (
    <>
      <TabHeader name="Blogs" />
      <div className="relative flex flex-col items-center min-h-screen">
        <BlogContainer />
      </div>
    </>
  )
}

// export const getStaticProps: GetStaticProps = async (context) => {
//   console.log(context)
//   return {
//     props: {},
//   }
// }

// export const getStaticPaths: GetStaticPaths = async (context) => {
//   console.log(context)
//   return {
//     paths: [],
//     fallback: false,
//   }
// }

export default Home
