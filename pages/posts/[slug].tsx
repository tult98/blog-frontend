import { GetStaticProps } from 'next'
import TableOfContent from '~/components/layouts/Blog/TableOfContent'
import BlogLayout from '~/components/layouts/BlogLayout'
import { request } from '~/services/request'
import { IPost } from '~/types/blogTypes'
import { getTableOfContents } from '~/utils/common'

const PostDetails = ({ post }: { post: any }) => {
  const headings = getTableOfContents(post)

  return (
    <BlogLayout disableWave={true}>
      <main className="mt-[70px]">
        <div className="max-w-[1100px] pt-12 flex flex-row justify-center items-start">
          <article className="max-w-[686px]">
            <p className="text-[1.1875rem]">
              It&apos;s June, which means it&apos;s Pride Month! Let&apos;s celebrate by building a wavy pixellated
              pride flag:
            </p>
          </article>
          <TableOfContent headings={headings} />
        </div>
      </main>
    </BlogLayout>
  )
}

export const getStaticProps: GetStaticProps = async (props) => {
  try {
    const { data: pages } = await request.post(`/databases/${process.env.NOTION_DATABASE_ID}/query`, {
      filter: {
        property: 'slug',
        rich_text: {
          equals: props.params?.slug as string,
        },
      },
    })

    if (!pages?.results?.length) throw new Error('Page not found')

    const { data: post } = await request.get(`/blocks/${pages.results[0].id}/children?page_size=100`)
    return { props: { post }, revalidate: 10 }
  } catch (error) {
    console.error('error', error)
    return { props: {}, revalidate: 10 }
  }
}

export const getStaticPaths = async () => {
  try {
    const { data } = await request.post(`/databases/${process.env.NOTION_DATABASE_ID}/query`)

    const paths = data?.results?.map((page: any) => {
      const post = page.properties as unknown as IPost
      return { params: { slug: post.slug.rich_text[0]?.plain_text } }
    })
    return { paths, fallback: 'blocking' }
  } catch (error) {
    console.error('fetch database failed:', error)
    return { paths: [], fallback: 'blocking' }
  }
}

export default PostDetails
