import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import theme, { GlobalStyle } from '@/style/globalStyles'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/icon.png" />
            </Head>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    )
}