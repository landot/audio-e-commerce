import React, { ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header';
import styled from 'styled-components';

export const LayoutStyles = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`

export const MainStyles = styled.main`
    flex-grow: 1;
`

interface LayoutProps {
    children: ReactNode,
    handleCartClick: () => void
}

function Layout(props: LayoutProps) {
    return (
        <LayoutStyles>
            <Header handleCartClick={props.handleCartClick} />
            <MainStyles role='main'>
                {props.children}
            </MainStyles>
            <Footer />
        </LayoutStyles>
    );
};

export default Layout;