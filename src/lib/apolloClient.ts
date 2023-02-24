import {
  ApolloClient,
  ApolloLink,
  concat,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
  StoreObject,
} from '@apollo/client'
import { NextResponse } from 'next/server'
import { useMemo } from 'react'
import { getAccessToken } from '~/utils/auth'

let apolloClient: ApolloClient<NormalizedCacheObject>

const getHeaders = () => {
  const headers: HeadersInit = {}
  const token = getAccessToken()
  if (token) {
    headers['Authorization'] = `Bearer ${token}`
  } else {
    // Not found access token -> push to login page
    NextResponse.redirect('/login')
  }
  return headers
}

const createLink = () => {
  const httpLink = new HttpLink({
    uri: process.env.GRAPHQL_SERVER_ENDPOINT ?? 'http://localhost:4000',
  })

  const authLink = new ApolloLink((operation, forward) => {
    operation.setContext(({ headers = {} }) => ({
      headers: {
        ...headers,
        ...getHeaders(),
      },
    }))
    return forward(operation)
  })

  // const logoutLink = onError(({ networkError }) => {
  //   // @ts-expect-error
  //   if (networkError?.statusCode === 401) {
  //     // TODO: do logout
  //   }
  // })

  return concat(authLink, httpLink)
}

const createApolloClient = (): ApolloClient<NormalizedCacheObject> => {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: createLink(),
    cache: new InMemoryCache(),
  })
}

export const initializeApollo = (
  initialState: Record<string, StoreObject | undefined> | null,
) => {
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

export const useApollo = (
  initialState: Record<string, StoreObject | undefined>,
) => {
  const store = useMemo(() => initializeApollo(initialState), [initialState])
  return store
}
