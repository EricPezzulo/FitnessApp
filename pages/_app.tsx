import '../styles/globals.css'
import type { AppProps } from 'next/app'
import apolloClient from "../lib/apollo";
import { ApolloProvider } from "@apollo/client";
import { RecoilRoot } from "recoil"
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
      
    </RecoilRoot>
  )
}

export default MyApp
