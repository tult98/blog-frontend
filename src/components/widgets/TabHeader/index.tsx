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
      <title>{`Tu (Bob) Le Thanh${postfix}`}</title>
      <link rel="icon" href="/favicon.png" />
      {children}
    </Head>
  )
}

export default TabHeader
