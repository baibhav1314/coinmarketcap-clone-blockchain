import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MoralisProvider } from 'react-moralis'
import { CoinMarketProvider } from '../context/context'
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MoralisProvider
      // serverUrl={'https://ggqjqhiz8eok.usemoralis.com:2053/server'}
      // appId={'nuPpNavDEc5DhFrRLTG8lFqYLMA2AFkwcgDgYjoV'}
      serverUrl={`${process.env.NEXT_PUBLIC_MORALIS_SERVER}`}
      appId={`${process.env.NEXT_PUBLIC_MORALIS_APPID}`}
    >
      <CoinMarketProvider>
        <Component {...pageProps} />
      </CoinMarketProvider>
    </MoralisProvider>
  )
}

export default MyApp
