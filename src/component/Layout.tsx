import React, { ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header';
import styled, { ThemeProvider } from 'styled-components';
import Head from 'next/head';
import theme, { GlobalStyle } from '@/style/globalStyles';

export const LayoutStyles = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    main {
        flex-grow: 1;
    }
`

interface LayoutProps {
    children: ReactNode,
    handleCartClick: () => void
}

function Layout(props: LayoutProps) {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Head>
                <link rel="shortcut icon" href="/icon.png" />
            </Head>
            <LayoutStyles>
                <Header handleCartClick={props.handleCartClick} />
                <main role='main'>
                    {props.children}
                </main>
                <Footer />
            </LayoutStyles>
        </ThemeProvider>
    );
};

export default Layout;