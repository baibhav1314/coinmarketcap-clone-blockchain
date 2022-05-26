import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MoralisProvider } from 'react-moralis'
import { CoinMarketProvider } from '../context/context'
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MoralisProvider
      // serverUrl={process.env.NEXT_PUBLIC_SERVER}
      // appId={process.env.NEXT_PUBLIC_APP_ID}
      serverUrl={'https://ggqjqhiz8eok.usemoralis.com:2053/server'}
      appId={'nuPpNavDEc5DhFrRLTG8lFqYLMA2AFkwcgDgYjoV'}
    >
      <CoinMarketProvider>
        <Component {...pageProps} />
      </CoinMarketProvider>
    </MoralisProvider>
  )
}

export default MyApp
