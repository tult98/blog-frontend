import type { AppProps } from 'next/app'
import Script from 'next/script'
import { RecoilRoot } from 'recoil'
import '../styles/globals.css'

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <>
      <Script id="google-tag-manager">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-TNQ5SNSD');
        `}
      </Script>
      <body className="flex flex-row justify-center">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TNQ5SNSD"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        <RecoilRoot>
          <Component {...pageProps} />
        </RecoilRoot>
      </body>
    </>
  )
}

export default MyApp
