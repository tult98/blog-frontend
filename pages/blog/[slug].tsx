import { GetStaticPaths, GetStaticProps } from 'next'
import ArticleDetail from '~/components/widgets/ArticleDetail'
import { initializeApollo } from '~/lib/apolloClient'
import { Article, ArticleEntityResponse, ArticleEntityResponseCollection } from '~/models/article'
import { GET_ARTICLES, GET_ARTICLE_BY_SLUG } from '~/queries/article'

interface Props {
  article: Article
}

const ArticleDetailPage = ({ article }: Props) => {
  return <ArticleDetail article={article} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  const apolloClient = initializeApollo({})
  const { data } = await apolloClient.query<{ articles: ArticleEntityResponseCollection }>({
    query: GET_ARTICLES,
  })
  return {
    paths: data.articles.data?.map((article) => {
      return {
        params: { slug: article.attributes.slug },
      }
    }),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context

  const apolloClient = initializeApollo({})
  const {
    data: { article },
  } = await apolloClient.query<{ article: ArticleEntityResponse }>({
    query: GET_ARTICLE_BY_SLUG,
    variables: { slug: params?.slug ?? '' },
  })

  return {
    props: { article: article.data.attributes },
  }
}

export default ArticleDetailPage
