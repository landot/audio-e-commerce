import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
    const mockProps = {
        handleCartClick: jest.fn(),
    };

    it('renders header content and handles cart click', () => {
        render(<Header {...mockProps} />);

        const logoImage = screen.getByAltText('Click logo to go to home page');
        const cartImage = screen.getByAltText('Click to show items in cart');

        expect(logoImage).toBeInTheDocument();
        expect(cartImage).toBeInTheDocument();

        fireEvent.click(cartImage);
        expect(mockProps.handleCartClick).toHaveBeenCalledTimes(1);
    });

    it('renders navigation links', () => {
        render(<Header {...mockProps} />);

        const homeNavLink = screen.getByText('Home');
        const headphonesNavLink = screen.getByText('Headphones');
        const speakersNavLink = screen.getByText('Speakers');
        const earphonesNavLink = screen.getByText('Earphones');

        expect(homeNavLink).toBeInTheDocument();
        expect(headphonesNavLink).toBeInTheDocument();
        expect(speakersNavLink).toBeInTheDocument();
        expect(earphonesNavLink).toBeInTheDocument();
    });
});