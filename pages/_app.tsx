import { ApolloProvider } from '@apollo/client'
import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import Notification from '~/components/widgets/Notification'
import { useApollo } from '~/lib/apolloClient'
import '../styles/globals.css'

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={apolloClient}>
      <SessionProvider session={session}>
        <RecoilRoot>
          <Notification />
          <Component {...pageProps} />
        </RecoilRoot>
      </SessionProvider>
    </ApolloProvider>
  )
}

export default MyApp
