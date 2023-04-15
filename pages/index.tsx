import type { GetStaticProps } from 'next'
import BlogContainer, { Props } from '~/components/modules/Blog/BlogContainer'
import TabHeader from '~/components/widgets/TabHeader'
import { initializeApollo } from '~/lib/apolloClient'
import { ArticleEntityResponseCollection } from '~/models/article'
import { GET_ARTICLES } from '~/queries/article'

const Home = ({ articles }: Props) => {
  return (
    <>
      <TabHeader name="Blogs" />
      <div className="relative flex flex-col items-center min-h-screen">
        <BlogContainer articles={articles} />
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo({})
  const {
    data: { articles },
  } = await apolloClient.query<{ articles: ArticleEntityResponseCollection }>({
    query: GET_ARTICLES,
  })

  return {
    props: {
      articles: articles.data,
    },
    revalidate: 60, // revalidate after 60s
  }
}

export default Home
