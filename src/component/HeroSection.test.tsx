import React from 'react';
import { render, screen } from '@testing-library/react';
import HeroSection from './HeroSection';

jest.mock('next/navigation', () => ({
    useRouter: () => ({
        push: jest.fn(),
    }),
}));


describe('HeroSection component', () => {
    it('renders hero section correctly', () => {
        render(<HeroSection />);
        expect(screen.getByText('new product')).toBeInTheDocument();
        expect(screen.getByText('XX99 Mark II Headphones')).toBeInTheDocument();
        expect(
            screen.getByText('Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.')
        ).toBeInTheDocument();
        expect(screen.getByText('See Product')).toBeInTheDocument();
    });

// TODO get this test to pass
//   it('navigates when "See Product" button is clicked', () => {
//     render(<HeroSection />);
//     const seeProductButton = screen.getByText('See Product');
//     fireEvent.click(seeProductButton);
//     expect(useRouter).toHaveBeenCalled();
//   });
});