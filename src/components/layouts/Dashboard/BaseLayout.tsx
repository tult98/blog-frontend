import Head from 'next/head'
import Header from '~/components/layouts/Dashboard/Header'
import SideBar from '~/components/layouts/Dashboard/SideBar'

interface Props {
  title: string
  children?: JSX.Element
}

const BaseLayout = ({ title, children }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" type="image/x-icon" href="/blog-favicon.png" />
      </Head>
      <section className="grid grid-cols-12 gap-4">
        <div className="col-span-12">
          <Header />
        </div>
        <div className="col-span-12 mt-0 divider"></div>
        <div className="col-span-2">
          <SideBar />
        </div>
        <div className="col-span-10 pr-8">{children}</div>
      </section>
    </>
  )
}

export default BaseLayout
