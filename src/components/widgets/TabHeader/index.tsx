import Head from 'next/head'
import { ReactElement } from 'react'

const TabHeader = ({
  name,
  children,
}: {
  name?: string
  children?: ReactElement
}) => {
  const postfix = name ? ` | ${name}` : ''
  return (
    <Head>
      <meta name="viewport" content="width=device-width" initial-scale="1" />
      <meta name="author" content="Tu Le Thanh" />
      <meta name="description" content="Blog of Tu Le Thanh" />
      <meta name="keywords" content="Tu Le Thanh, Blog, Portfolio" />
      <title>{`Tu (Bob) Le Thanh${postfix}`}</title>
      <link rel="icon" href="/favicon.png" />
      {children}
    </Head>
  )
}

export default TabHeader
