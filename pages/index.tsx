import localFont from 'next/font/local'
import Header from '~/components/layouts/Blog/Header'
import PopularContent from '~/components/layouts/Blog/PopularContent'
import PostItem from '~/components/layouts/Blog/PostItem'
import TopicList from '~/components/layouts/Blog/TopicList'
import { IPost } from '~/types/blogTypes'

const dumpPosts: IPost[] = [
  {
    id: '1',
    title: 'Animated Pride Flags',
    preface:
      "Happy Pride month! In this tutorial, I'll share a handful of my favourite animation tricks. Yo'll learn how to build an animated wavy pride flag using CSS keyframes and linear gradients. We'll also see how to make it dynamic using React. 🏳️‍🌈",
    content: 'this is content',
  },
  {
    id: '2',
    title: 'The “const” Deception',
    subtitle: 'Exploring the difference between assignment and mutation in JavaScript',
    preface:
      "The “const” keyword in JavaScript is used to create constants, variables that can't change. Curiously, though, we do seem to be able to edit objects and arrays that are created using “const”. In this tutorial, we're going to dig into the incredibly-important distinction between “assignment” and “mutation” in JavaScript.",
    content: 'this is content',
  },
]

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

const Home = () => {
  return (
    <>
      <main className={`${wotFardFont.variable} font-sans w-screen flex flex-col items-center overflow-x-hidden`}>
        <Header />
        <div className="max-w-[1100px] px-8 pt-16 grid grid-cols-3 gap-x-24 gap-y-16">
          <section className="col-span-2">
            <h2 className="heading-2 mb-9">Recently published</h2>
            <div className="flex flex-col space-y-12">
              {dumpPosts.map((post) => (
                <PostItem key={post.id} post={post} />
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

export default Home
