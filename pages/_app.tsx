// import algoliasearch from 'algoliasearch/lite'
import type { AppProps } from 'next/app'
// import { InstantSearch } from 'react-instantsearch-hooks-web'
import { RecoilRoot } from 'recoil'
import Notification from '~/components/widgets/Notification'
import '../styles/globals.css'

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  // const searchClient = algoliasearch(
  //   process.env.NEXT_PUBLIC_SEARCH_APPLICATION_ID ?? '',
  //   process.env.NEXT_PUBLIC_SEARCH_ONLY_API_KEY ?? '',
  // )

  return (
    <RecoilRoot>
      {/* <InstantSearch searchClient={searchClient} indexName={process.env.NEXT_PUBLIC_SEARCH_INDEX_NAME}> */}
      <Notification />
      <Component {...pageProps} />
      {/* </InstantSearch> */}
    </RecoilRoot>
  )
}

export default MyApp
