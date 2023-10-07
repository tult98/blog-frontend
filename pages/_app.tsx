import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import '../styles/globals.css'

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <div className="flex flex-row justify-center">
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </div>
  )
}

export default MyApp
