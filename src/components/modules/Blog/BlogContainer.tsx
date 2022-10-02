import { IPost } from '~/models/post'
import Post from '~/components/modules/Blog/Post'

const dumpData = [
  {
    id: '1',
    title: 'Cheerful Loving Couple Bakers Drinking Coffee',
    slug: 'slug-1',
    cover_image:
      'https://awcdn1.ahmad.works/writing/wp-content/uploads/2015/05/cheerful-loving-couple-bakers-drinking-coffee-PCAVA6B-2-768x349.jpg',
    category: { id: '1', title: 'Lifestyle', slug: 'lifestyle' },
    tags: [{ id: '1', name: 'Coffee', slug: 'coffee' }],
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
    content:
      'It’s no secret that the digital industry is booming. From exciting startups to global brands, companies are reaching out to digital agencies, responding to the new possibilities available. However, the industry is fast becoming overcrowded, heaving with agencies offering similar services — on the surface, at least. Producing creative, fresh projects is the key to standing out. Unique side projects are the best place to innovate, but balancing commercially and creatively lucrative work is tricky. So, this article looks at',
    category: { id: '1', title: 'Lifestyle', slug: 'lifestyle' },
    tags: [{ id: '1', name: 'Coffee', slug: 'coffee' }],
    updated_at: '2020-01-01T00:00:00.000Z',
  },
] as IPost[]

const BlogContainer = () => {
  return (
    <section className="lg: max-w-[910px] lg: w-4/5 mt-32">
      {dumpData.map((post: IPost) => (
        <Post post={post} key={post.id} />
      ))}
    </section>
  )
}

export default BlogContainer
