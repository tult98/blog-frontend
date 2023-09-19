import {
  BlockObjectResponse,
  ListBlockChildrenResponse,
  PageObjectResponse,
} from '@notionhq/client/build/src/api-endpoints'
import { GetStaticProps } from 'next'
import React from 'react'
import ParagraphBlock from '~/components/layouts/Blog/Block/ParagraphBlock'
import BlogLayout from '~/components/layouts/Blog/BlogLayout'
import TableOfContent from '~/components/layouts/Blog/TableOfContent'
import { getDatabase } from '~/services/database'
import { notion } from '~/services/notion'
import { TitleBlock } from '~/theme/notionTypes'
import { IPost } from '~/types/blogTypes'
import { getTableOfContents } from '~/utils/common'

const renderBlockByType = (block: BlockObjectResponse) => {
  switch (block.type) {
    case 'paragraph':
      return <ParagraphBlock block={block as any} />
    default:
      return null
  }
}

const PostDetails = ({ post, title }: { post: ListBlockChildrenResponse; title: string }) => {
  const headings = getTableOfContents(post)

  return (
    <BlogLayout disableWave={true} title={title}>
      <main className="mt-[70px]">
        <div className="max-w-[1100px] pt-12 flex flex-row justify-center items-start relative space-x-16">
          <article className="grow shrink basis-[686px]">
            {post.results.map((block) => (
              <React.Fragment key={block.id}>{renderBlockByType(block as BlockObjectResponse)}</React.Fragment>
            ))}
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

  const pageObject = page.results[0] as PageObjectResponse

  if (!page?.results?.length) return { props: {} }

  const post = await notion.blocks.children.list({ block_id: page.results[0].id, page_size: 100 })
  return { props: { post, title: (pageObject.properties.title as TitleBlock).title?.[0].plain_text }, revalidate: 10 }
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
