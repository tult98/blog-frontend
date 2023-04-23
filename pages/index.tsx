import type { GetStaticProps } from 'next'
import BlogContainer, { IArticleListing } from '~/components/modules/Blog/BlogContainer'
import TabHeader from '~/components/widgets/TabHeader'
import { initializeApollo } from '~/lib/apolloClient'
import { ArticleEntityResponseCollection } from '~/models/article'
import { TagEntityResponseCollection } from '~/models/tag'
import { GET_ARTICLES } from '~/queries/article'
import { GET_TAGS } from '~/queries/tag'

const Home = ({ articles, tags, pagination }: IArticleListing) => {
  return (
    <>
      <TabHeader name="Blogs" />
      <div className="relative flex flex-col items-center min-h-screen">
        <BlogContainer articles={articles} tags={tags} pagination={pagination} />
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
      pagination: articles.meta.pagination,
    },
    revalidate: 60, // revalidate after 60s
  }
}

export default Home
