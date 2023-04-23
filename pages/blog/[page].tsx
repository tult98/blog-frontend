import { GetStaticPaths, GetStaticProps } from 'next'
import BlogContainer, { IArticleListing } from '~/components/modules/Blog/BlogContainer'
import TabHeader from '~/components/widgets/TabHeader'
import { initializeApollo } from '~/lib/apolloClient'
import { ArticleEntityResponseCollection } from '~/models/article'
import { TagEntityResponseCollection } from '~/models/tag'
import { GET_ARTICLES } from '~/queries/article'
import { GET_TAGS } from '~/queries/tag'

const BlogListingPage = ({ articles, tags, pagination }: IArticleListing) => {
  return (
    <>
      <TabHeader name="Blogs" />
      <div className="relative flex flex-col items-center min-h-screen">
        <BlogContainer articles={articles} tags={tags} pagination={pagination} />
      </div>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: Array.from({ length: 5 }, (_, index) => index + 1).map((item) => {
      return { params: { page: item.toString() } }
    }),
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context
  const apolloClient = initializeApollo({})
  const {
    data: { articles },
  } = await apolloClient.query<{ articles: ArticleEntityResponseCollection }>({
    query: GET_ARTICLES,
    variables: {
      pagination: { start: ((Number(params?.page) ?? 1) - 1) * 12, limit: 12 },
    },
  })

  if (!articles.data?.length) {
    return { notFound: true }
  }

  const {
    data: { tags },
  } = await apolloClient.query<{ tags: TagEntityResponseCollection }>({
    query: GET_TAGS,
    variables: {
      pagination: {
        limit: 1000, // get all the tags
      },
    },
  })

  return {
    props: {
      articles: articles.data,
      tags: tags.data,
      pagination: articles.meta.pagination,
    },
  }
}

export default BlogListingPage
