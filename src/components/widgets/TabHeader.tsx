import Head from 'next/head'
import { ReactElement } from 'react'

const TabHeader = ({ name, children }: { name?: string; children?: ReactElement }) => {
  const postfix = name ? ` | ${name}` : ''
  return (
    <Head>
      <title>{`Tu (Bob) Le Thanh${postfix}`}</title>
      <meta name="viewport" content="width=device-width" initial-scale="1" />
      <meta name="author" content="Tu Le Thanh" />
      <meta name="description" content="Blog of Tu Le Thanh" />
      <meta name="keywords" content="Tu Le Thanh, Blog, Portfolio" />
      <link rel="icon" href="/favicon.png" />
      <link rel="preload" as="font" href="/fonts/Calibre-Medium.woff2" />
      <link rel="preload" as="font" href="/fonts/Calibre-Regular.woff2" />
      <link rel="preload" as="font" href="/fonts/Calibre-Semibold.woff2" />
      <link rel="preload" as="font" href="/fonts/SFMono-Regular.woff2" />
      {children}
    </Head>
  )
}

export default TabHeader
