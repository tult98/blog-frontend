import Header from '~/components/layouts/Dashboard/Header'

interface Props {
  children: React.ReactNode
}

const BlogLayout = ({ children }: Props) => {
  return (
    <div className="flex flex-col items-center sourceSansPro">
      <Header />
      <section className="flex flex-col tablet:flex-row px-10 mt-32 max-w-[1220px]">
        <main className="grow">{children}</main>
        <aside className="basis-[250px] ml-0 tablet:ml-[96px] mt-8 tablet:mt-0 flex flex-col shrink-0 laptop:basis-[312px] laptop:ml-[128px]">
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
