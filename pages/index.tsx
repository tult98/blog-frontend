import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints'
import PopularContent from '~/components/layouts/Blog/PopularContent'
import PostItem from '~/components/layouts/Blog/PostItem'
import TopicList from '~/components/layouts/Blog/TopicList'
import BlogLayout from '~/components/layouts/Blog/BlogLayout'
import { getDatabase } from '~/services/database'
import { IPost } from '~/types/blogTypes'
import { useMemo } from 'react'

const Home = ({ posts }: { posts: PageObjectResponse[] }) => {
  const topicSet = useMemo(() => {
    const set = new Set<string>()
    posts.forEach((post) => (post.properties.tags as any).multi_select.forEach((tag: any) => set.add(tag.name)))

    return set
  }, [posts])

  return (
    <BlogLayout>
      <div className="max-w-[1100px] lg:px-8 px-4 pt-16 grid lg:grid-cols-3 grid-cols-1 lg:gap-x-24 gap-y-16">
        <section className="mb-16 lg:col-span-2">
          <h2 className="heading-2 mb-9">Recently published</h2>
          <div className="flex flex-col space-y-12">
            {posts.map((post) => (
              <PostItem key={post.id} post={post.properties as unknown as IPost} />
            ))}
          </div>
        </section>
        <aside className="space-y-16">
          <TopicList topics={Array.from(topicSet)} />
          {posts.length >= 5 && <PopularContent />}
        </aside>
      </div>
    </BlogLayout>
  )
}

export const getStaticProps = async () => {
  const database = await getDatabase()

  return { props: { posts: database?.results as PageObjectResponse[] }, revalidate: 10 }
}

export default Home
