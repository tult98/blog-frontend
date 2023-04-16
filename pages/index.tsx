import type { GetStaticProps } from 'next'
import BlogContainer, { Props } from '~/components/modules/Blog/BlogContainer'
import TabHeader from '~/components/widgets/TabHeader'
import { initializeApollo } from '~/lib/apolloClient'
import { ArticleEntityResponseCollection } from '~/models/article'
import { TagEntityResponseCollection } from '~/models/tag'
import { GET_ARTICLES } from '~/queries/article'
import { GET_TAGS } from '~/queries/tag'

const Home = ({ articles, tags }: Props) => {
  return (
    <>
      <TabHeader name="Blogs" />
      <div className="relative flex flex-col items-center min-h-screen">
        <BlogContainer articles={articles} tags={tags} />
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

  const {
    data: { tags },
  } = await apolloClient.query<{ tags: TagEntityResponseCollection }>({
    query: GET_TAGS,
  })

  return {
    props: {
      articles: articles.data,
      tags: tags.data,
    },
    revalidate: 60, // revalidate after 60s
  }
}

export default Home
