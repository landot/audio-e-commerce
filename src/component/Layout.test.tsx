import React from 'react';
import { render, screen } from '@testing-library/react';
import Layout from './Layout';

describe('Layout component', () => {
    it('renders header, main, and footer', () => {
        const handleCartClickMock = jest.fn();
        render(<Layout handleCartClick={handleCartClickMock}>Hello World</Layout>);
        
        const headerElement = screen.getByRole('menubar');
        const mainElement = screen.getByRole('main');
        const footerElement = screen.getByRole('contentinfo');
        
        expect(headerElement).toBeInTheDocument();
        expect(mainElement).toBeInTheDocument();
        expect(footerElement).toBeInTheDocument();
    });
    
    it('renders children inside the main element', () => {
        const handleCartClickMock = jest.fn();
        render(<Layout handleCartClick={handleCartClickMock}><div data-testid="child">Child Component</div></Layout>);
        
        const childElement = screen.getByTestId('child');
        const mainElement = screen.getByRole('main');
        
        expect(childElement).toBeInTheDocument();
        expect(mainElement).toContainElement(childElement);
    });
});
