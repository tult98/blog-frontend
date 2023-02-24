import { ApolloProvider } from '@apollo/client'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import Notification from '~/components/widgets/Notification'
import { useApollo } from '~/lib/apolloClient'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState)
  return (
    <ApolloProvider client={apolloClient}>
      <RecoilRoot>
        <Notification />
        <Component {...pageProps} />
      </RecoilRoot>
    </ApolloProvider>
  )
}

export default MyApp
