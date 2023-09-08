import { ListBlockChildrenResponse, PageObjectResponse } from '@notionhq/client/build/src/api-endpoints'
import { GetStaticProps } from 'next'
import TableOfContent from '~/components/layouts/Blog/TableOfContent'
import BlogLayout from '~/components/layouts/BlogLayout'
import { getDatabase } from '~/services/database'
import { notion } from '~/services/notion'
import { IPost } from '~/types/blogTypes'
import { getTableOfContents } from '~/utils/common'

const PostDetails = ({ post }: { post: ListBlockChildrenResponse }) => {
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
  const page = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID as string,
    filter: { property: 'slug', rich_text: { equals: props.params?.slug as string } },
  })

  if (!page?.results?.length) return { props: {} }

  const post = await notion.blocks.children.list({ block_id: page.results[0].id, page_size: 100 })
  return { props: { post }, revalidate: 10 }
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
