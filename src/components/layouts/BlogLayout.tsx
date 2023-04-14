import Header from '~/components/layouts/Dashboard/Header'

interface Props {
  children: React.ReactNode
}

const BlogLayout = ({ children }: Props) => {
  return (
    <div className="flex flex-col items-center sourceSansPro">
      <Header />
      <section className="grid grid-cols-1 lg:grid lg:grid-cols-12 max-w-[1220px] px-10 gap-x-20 mt-32">
        <main className="col-span-1 lg:col-span-9">{children}</main>
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
    </div>
  )
}

// NOTE: this should be server side rendering in the future

export default BlogLayout
