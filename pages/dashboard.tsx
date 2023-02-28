import Head from 'next/head'
import Dashboard from '~/components/screens/Dashboard'

const DashboardPage = () => {
  return (
    <>
      <Head>
        <title>TuLamThings | Blog</title>
        <link rel="icon" type="image/x-icon" href="/blog-favicon.png" />
      </Head>
      <Dashboard />
    </>
  )
}

export default DashboardPage
