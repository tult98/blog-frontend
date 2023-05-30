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
  const searchClient = algoliasearch(
    process.env.NEXT_PUBLIC_SEARCH_APPLICATION_ID ?? '',
    process.env.NEXT_PUBLIC_SEARCH_ONLY_API_KEY ?? '',
  )

  return (
    <ApolloProvider client={apolloClient}>
      <RecoilRoot>
        <InstantSearch searchClient={searchClient} indexName={process.env.NEXT_PUBLIC_SEARCH_INDEX_NAME}>
          <Notification />
          <Component {...pageProps} />
        </InstantSearch>
      </RecoilRoot>
    </ApolloProvider>
  )
}

export default MyApp
