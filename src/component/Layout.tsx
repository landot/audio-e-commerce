import React, { ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header';
import styled from 'styled-components';

export const LayoutStyles = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
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
        <LayoutStyles>
            <Header handleCartClick={props.handleCartClick} />
            <main role='main'>
                {props.children}
            </main>
            <Footer />
        </LayoutStyles>
    );
};

export default Layout;