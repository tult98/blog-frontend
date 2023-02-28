import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'
import { NextApiRequest, NextApiResponse } from 'next'
import NextAuth, { AuthOptions, Session, User } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { initializeApollo } from '~/lib/apolloClient'
import { IUser } from '~/models/user'
import { LOGIN, ME } from '~/queries/auth'

interface CustomUser extends User {
  role: number
}

interface JWT {
  accessToken: string
  refreshToken: string
  expiresAt: string
  user: CustomUser
  error?: 'RefreshAccessTokenError'
}

export interface CustomSession extends Session {
  user: CustomUser
  error?: 'RefreshAccessTokenError'
  accessToken: string
}

const refreshAccessToken = async (token: JWT): Promise<JWT> => {
  // TODO: call refresh token query
  return token
}

const providers = [
  // @ts-expect-error
  CredentialsProvider({
    id: 'credentials',
    name: 'Credentials',
    async authorize(credentials) {
      try {
        const apolloClient = initializeApollo({})
        const { data } = await apolloClient.query({
          variables: credentials,
          query: LOGIN,
        })
        return data.login
      } catch (e: any) {
        console.error('Error login', e)
        throw new Error(e)
      }
    },
  }),
]

const callbacks = {
  jwt: async ({
    token,
    user,
  }: {
    token: JWT
    user: Record<string, string>
  }) => {
    if (user) {
      // This will only be executed at login. Each next invocation will skip this part.
      token.accessToken = user.accessToken
      token.expiresAt = user.expiresAt
      token.refreshToken = user.refreshToken
      try {
        const client = new ApolloClient({
          ssrMode: true,
          link: new HttpLink({
            uri: process.env.GRAPHQL_SERVER_ENDPOINT ?? 'http://localhost:4000',
            headers: {
              Authorization: token.accessToken,
            },
          }),
          cache: new InMemoryCache(),
        })
        const {
          data: { me },
        } = await client.query<{ me: IUser }>({
          query: ME,
        })
        token.user = {
          id: me.id,
          email: me.email,
          role: me.role,
          name: me.fullName,
        }
      } catch (error: unknown) {
        console.error('Error fetching logged in user', error)
      } finally {
        return token
      }
    } else if (Date.now() < new Date(token.expiresAt).getTime()) {
      // If the access token has not expired yet, return it
      return token
    } else {
      // If the access token has expired, try to refresh it
      try {
        const newToken = await refreshAccessToken(token)
        return {
          ...token,
          ...newToken,
        }
      } catch (error) {
        console.error('Error refreshing access token', error)
        return { ...token, error: 'RefreshAccessTokenError' as const }
      }
    }
  },
  session: async ({
    session,
    token,
  }: {
    session: CustomSession
    token: JWT
  }) => {
    session.error = token.error
    session.user = token.user
    session.accessToken = token.accessToken
    return session
  },
}

export const options = {
  providers,
  callbacks,
  pages: {},
  secret: process.env.NEXT_AUTH_SECRET ?? '', //Used to encrypt the NextAuth.js JWT
}

const Auth = (req: NextApiRequest, res: NextApiResponse) =>
  // @ts-expect-error
  NextAuth(req, res, options as AuthOptions)
export default Auth
