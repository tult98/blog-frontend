import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints'
import BlogLayout from '~/components/layouts/BlogLayout'
import { getDatabase } from '~/services/database'
import { IPost } from '~/types/blogTypes'

const PostDetails = () => {
  return (
    <BlogLayout disableWave={true}>
      <p>Post details page</p>
    </BlogLayout>
  )
}

export const getStaticProps = async () => {
  // TODO: fetch a specific post (notion page)
  return { props: {}, revalidate: 10 }
}

export const getStaticPaths = async () => {
  const database = await getDatabase()

  const paths = database?.results?.map((page) => {
    const post = (page as PageObjectResponse).properties as unknown as IPost
    return { params: { slug: post.slug.rich_text[0]?.plain_text } }
  })

  return { paths, fallback: 'blocking' }
}

export default PostDetails
