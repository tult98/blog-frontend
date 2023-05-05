import { GetStaticPaths, GetStaticProps } from 'next'
import BlogContainer, { IArticleListing } from '~/components/modules/Blog/BlogContainer'
import { initializeApollo } from '~/lib/apolloClient'
import { GET_TAGS } from '~/queries/tag'
import { TagEntityResponseCollection } from '~/models/tag'
import { GET_ARTICLES } from '~/queries/article'
import { ArticleEntityResponseCollection } from '~/models/article'

const PostListByTagPage = ({ articles, pagination }: Pick<IArticleListing, 'articles' | 'pagination'>) => {
  return <BlogContainer articles={articles} pagination={pagination} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  const apolloClient = initializeApollo({})
  const {
    data: { tags },
  } = await apolloClient.query<{ tags: TagEntityResponseCollection }>({
    query: GET_TAGS,
    variables: {
      pagination: { limit: 1000 },
    },
  })
  return {
    paths: tags.data.map((tagEntity) => {
      return { params: { slug: tagEntity.attributes.slug } }
    }),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const apolloClient = initializeApollo({})
  const {
    data: { articles },
  } = await apolloClient.query<{ articles: ArticleEntityResponseCollection }>({
    query: GET_ARTICLES,
    variables: {
      filters: {
        tags: {
          slug: { eq: params!.slug },
        },
      },
    },
  })

  return {
    props: { articles: articles.data, pagination: articles.meta.pagination },
  }
}

export default PostListByTagPage
