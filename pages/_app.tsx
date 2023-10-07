import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import '../styles/globals.css'

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <RecoilRoot>
      <div className="flex flex-row justify-center">
        <Component {...pageProps} />
      </div>
    </RecoilRoot>
  )
}

export default MyApp
