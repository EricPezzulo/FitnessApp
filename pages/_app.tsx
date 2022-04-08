import '../styles/globals.css'
import type { AppProps } from 'next/app'
import apolloClient from "../lib/apollo";
import { ApolloProvider } from "@apollo/client";
import { RecoilRoot } from "recoil"
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <RecoilRoot>
        <ApolloProvider client={apolloClient}>
          <Component {...pageProps} />
        </ApolloProvider>
      </RecoilRoot>
    </SessionProvider>
  )
}

export default MyApp
