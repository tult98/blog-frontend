import { ApolloProvider } from '@apollo/client'
import algoliasearch from 'algoliasearch/lite'
import type { AppProps } from 'next/app'
import { InstantSearch } from 'react-instantsearch-hooks-web'
import { RecoilRoot } from 'recoil'
import Notification from '~/components/widgets/Notification'
import { useApollo } from '~/lib/apolloClient'
import '../styles/globals.css'

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState)
  const searchClient = algoliasearch('XS4WHY6HLX', '53f6c4be0dc933caba7ba43d215fc4a1')

  return (
    <ApolloProvider client={apolloClient}>
      <RecoilRoot>
        <InstantSearch searchClient={searchClient} indexName="dev_blog">
          <Notification />
          <Component {...pageProps} />
        </InstantSearch>
      </RecoilRoot>
    </ApolloProvider>
  )
}

export default MyApp
