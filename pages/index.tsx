import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints'
import localFont from 'next/font/local'
import Header from '~/components/layouts/Blog/Header'
import PopularContent from '~/components/layouts/Blog/PopularContent'
import PostItem from '~/components/layouts/Blog/PostItem'
import TopicList from '~/components/layouts/Blog/TopicList'
import { getDatabase } from '~/services/database'
import { IPost } from '~/types/blogTypes'

const wotFardFont = localFont({
  src: [
    {
      path: '../public/fonts/Wotfard-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Wotfard-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/Wotfard-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-wot-fard',
})

const Home = ({ posts }: { posts: PageObjectResponse[] }) => {
  return (
    <>
      <main className={`${wotFardFont.variable} font-sans w-screen flex flex-col items-center overflow-x-hidden`}>
        <Header />
        <div className="max-w-[1100px] px-8 pt-16 grid grid-cols-3 gap-x-24 gap-y-16">
          <section className="col-span-2">
            <h2 className="heading-2 mb-9">Recently published</h2>
            <div className="flex flex-col space-y-12">
              {posts.map((post) => (
                <PostItem key={post.id} post={post.properties as unknown as IPost} />
              ))}
            </div>
          </section>
          <aside className="space-y-16">
            <TopicList />
            <PopularContent />
          </aside>
        </div>
      </main>
    </>
  )
}

export const getStaticProps = async () => {
  const database = await getDatabase()

  return { props: { posts: database?.results as PageObjectResponse[] }, revalidate: 10 }
}

export default Home
