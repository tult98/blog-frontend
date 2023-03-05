import Head from 'next/head'
import Header from '~/components/layouts/Dashboard/Header'
import SideBar from '~/components/layouts/Dashboard/SideBar'
import Breadcrumbs from '~/components/widgets/Breadcrumbs'
import Modal from '~/components/widgets/Modals'

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
      <section className="grid grid-cols-12 gap-8">
        <div className="col-span-12 border-b border-gray-200">
          <Header />
        </div>
        <div className="col-span-2">
          <SideBar />
        </div>
        <div className="col-span-10 pr-8 space-y-8">
          <Breadcrumbs />
          {children}
        </div>
        <Modal />
      </section>
    </>
  )
}

export default BaseLayout
