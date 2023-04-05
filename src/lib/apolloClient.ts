import { ApolloClient, from, HttpLink, InMemoryCache, NormalizedCacheObject, StoreObject } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
// import { CustomSession } from 'pages/api/auth/[...nextauth]'
import { useMemo } from 'react'

export enum ServerErrorCode {
  // FIXME: many built in Error code from apollo haven't listed here
  UNAUTHENTICATED = 'UNAUTHENTICATED',
  FORBIDDEN = 'FORBIDDEN',
  NOT_FOUND = 'NOT_FOUND',
}

let apolloClient: ApolloClient<NormalizedCacheObject>

export const createApolloClient = (): ApolloClient<NormalizedCacheObject> => {
  const authLink = setContext(async (_, { headers }) => {
    // const session = (await getSession()) as CustomSession | null
    return {
      headers: {
        ...headers,
        // authorization: session?.accessToken ?? '',
      },
    }
  })

  const httpLink = new HttpLink({
    uri: process.env.GRAPHQL_SERVER_ENDPOINT,
  })

  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: from([authLink, httpLink]),
    cache: new InMemoryCache(),
  })
}

export const initializeApollo = (initialState: Record<string, StoreObject | undefined> | null) => {
  const _apolloClient = apolloClient ?? createApolloClient()
  // If your page has Next.js data fetching methods that use Apollo Client,
  // the initial state gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract()

    // Restore the cache using the data passed from
    // getStaticProps/getServerSideProps combined with the existing cached data
    _apolloClient.cache.restore({ ...existingCache, ...initialState })
  }

  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient

  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient
  return _apolloClient
}

export const useApollo = (initialState: Record<string, StoreObject | undefined>) => {
  const store = useMemo(() => initializeApollo(initialState), [initialState])
  return store
}
