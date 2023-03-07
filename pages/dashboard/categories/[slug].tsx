import { ApolloError } from '@apollo/client'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import BaseLayout from '~/components/layouts/Dashboard/BaseLayout'
import CategoryDetails from '~/components/screens/CategoryDetails'
import { initializeApollo, ServerErrorCode } from '~/lib/apolloClient'
import { ICategory } from '~/models/category'
import { GET_CATEGORY_BY_SLUG } from '~/queries/category'

interface Props {
  category: ICategory
}

const CategoryDetailsPage = ({ category }: Props) => {
  const router = useRouter()
  const { slug } = router.query

  return (
    <BaseLayout title={`TuLamThings | ${slug}`}>
      <CategoryDetails category={category} />
    </BaseLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const apolloClient = initializeApollo({})
  const { slug } = context.query
  try {
    const { data, error } = await apolloClient.query<{
      getCategoryBySlug: ICategory
    }>({
      query: GET_CATEGORY_BY_SLUG,
      variables: { slug },
    })

    if (!data || error) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        category: data.getCategoryBySlug,
      },
    }
  } catch (error: unknown) {
    if (error instanceof ApolloError) {
      for (const err of error.graphQLErrors) {
        if (err.extensions?.code === ServerErrorCode.NOT_FOUND) {
          return {
            notFound: true,
          }
        }
      }
      throw error
    }
    throw error // 500 error page
  }
}

export default CategoryDetailsPage
