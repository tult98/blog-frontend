import Post from '~/components/modules/Blog/Post'
import { IPost } from '~/models/article'

const dumpData = [
  {
    id: '1',
    title: 'Cheerful Loving Couple Bakers Drinking Coffee',
    slug: 'slug-1',
    cover_image:
      'https://awcdn1.ahmad.works/writing/wp-content/uploads/2015/05/cheerful-loving-couple-bakers-drinking-coffee-PCAVA6B-2-768x349.jpg',
    category: { id: '1', title: 'Lifestyle', slug: 'lifestyle' },
    tags: [{ id: '1', name: 'Coffee', slug: 'coffee' }],
    preface:
      'Next.js 13 was probably one of the most awaited releases of Next.js It brought us the app directory, with support for layouts, React Server Components and more! The most interesting feature is the introduction of React Server Components. To put it simply Server components allow you to run data fetching on the server removing the',
    content:
      'It’s no secret that the digital industry is booming. From exciting startups to global brands, companies are reaching out to digital agencies, responding to the new possibilities available. However, the industry is fast becoming overcrowded, heaving with agencies offering similar services — on the surface, at least. Producing creative, fresh projects is the key to standing out. Unique side projects are the best place to innovate, but balancing commercially and creatively lucrative work is tricky. So, this article looks at',
    updated_at: '2020-01-01T00:00:00.000Z',
  },
  {
    id: '2',
    slug: 'slug-2',
    title: 'Cheerful Loving Couple Bakers Drinking Coffee',
    cover_image:
      'https://awcdn1.ahmad.works/writing/wp-content/uploads/2015/05/cheerful-loving-couple-bakers-drinking-coffee-PCAVA6B-2-768x349.jpg',
    category: { id: '1', title: 'Lifestyle', slug: 'lifestyle' },
    tags: [{ id: '1', name: 'Coffee', slug: 'coffee' }],
    preface:
      'Next.js 13 was probably one of the most awaited releases of Next.js It brought us the app directory, with support for layouts, React Server Components and more! The most interesting feature is the introduction of React Server Components. To put it simply Server components allow you to run data fetching on the server removing the',
    content:
      'It’s no secret that the digital industry is booming. From exciting startups to global brands, companies are reaching out to digital agencies, responding to the new possibilities available. However, the industry is fast becoming overcrowded, heaving with agencies offering similar services — on the surface, at least. Producing creative, fresh projects is the key to standing out. Unique side projects are the best place to innovate, but balancing commercially and creatively lucrative work is tricky. So, this article looks at',
    updated_at: '2020-01-01T00:00:00.000Z',
  },
  {
    id: '3',
    slug: 'slug-3',
    title: 'Cheerful Loving Couple Bakers Drinking Coffee',
    cover_image:
      'https://awcdn1.ahmad.works/writing/wp-content/uploads/2015/05/cheerful-loving-couple-bakers-drinking-coffee-PCAVA6B-2-768x349.jpg',
    // category: 'Lifestyle',
    // tags: ['people', 'coffee', 'couple'],
    preface:
      'Next.js 13 was probably one of the most awaited releases of Next.js It brought us the app directory, with support for layouts, React Server Components and more! The most interesting feature is the introduction of React Server Components. To put it simply Server components allow you to run data fetching on the server removing the',
    content:
      'It’s no secret that the digital industry is booming. From exciting startups to global brands, companies are reaching out to digital agencies, responding to the new possibilities available. However, the industry is fast becoming overcrowded, heaving with agencies offering similar services — on the surface, at least. Producing creative, fresh projects is the key to standing out. Unique side projects are the best place to innovate, but balancing commercially and creatively lucrative work is tricky. So, this article looks at',
    category: { id: '1', title: 'Lifestyle', slug: 'lifestyle' },
    tags: [{ id: '1', name: 'Coffee', slug: 'coffee' }],
    updated_at: '2020-01-01T00:00:00.000Z',
  },
] as IPost[]

const BlogContainer = () => {
  return (
    <section className="grid grid-cols-1 lg:grid lg:grid-cols-12 max-w-[1220px] px-10 gap-x-20 mt-32">
      <main className="col-span-1 lg:col-span-9">
        <p className="mb-12 font-bold tracking-[3px] text-xl leading-[1.42857] text-[#2f353f]">WHAT&apos;S NEW</p>
        <div className="grid grid-cols-1 mt-16 md:grid-cols-2 lg:mt-20 gap-x-8 gap-y-8">
          {dumpData.map((post: IPost) => (
            <Post post={post} key={post.id} />
          ))}
        </div>
      </main>
      <aside className="col-span-1 lg:col-span-3">
        <p className="uppercase tracking-[3px] leading-[1.42857] text-xl font-bold">
          Receive my new post in your inbox?
        </p>
        <p className="mb-6">Be the first to know about my new posts, best practices, and community events.</p>
        <input
          className="w-full py-2 pl-2 mb-2 border border-gray-400 rounded-none focus:outline-none"
          type="text"
          placeholder="Enter your email"
        />
        <button className="h-10 w-full text-white bg-[#3f20ba] rounded">Subscribe</button>
      </aside>
    </section>
  )
}

export default BlogContainer
