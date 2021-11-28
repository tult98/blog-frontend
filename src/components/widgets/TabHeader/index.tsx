import Head from 'next/head'

const TabHeader = ({ name }: { name?: string }) => {
  const postfix = name ? ` | ${name}` : ''
  return (
    <Head>
      <title>{`Tu (Bob) Le Thanh${postfix}`}</title>
      <link rel="icon" href="/favicon.png" />
    </Head>
  )
}

export default TabHeader
