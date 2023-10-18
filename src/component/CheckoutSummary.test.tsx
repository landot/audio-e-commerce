import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { CartItemData } from './StaticCartItem';
import CheckoutSummary from './CheckoutSummary';
import imageIcon from "../assets/product-xx59-headphones/desktop/image-product.jpg";

describe('CheckoutSummary Component', () => {
    const checkoutThankYouProps: CartItemData[] = [
        {
            name: 'XX99 MK II',
            price: 1,
            img: imageIcon,
            quantity: 3
        },
        {
            name: 'XX99 MK III',
            price: 2,
            img: imageIcon,
            quantity: 2
        },
        {
            name: 'XX99 MK V',
            price: 3,
            img: imageIcon,
            quantity: 1
        },
    ]

    it('renders correctly', async () => {
        const mockContinue = jest.fn();
        render(
            <CheckoutSummary 
                order={...checkoutThankYouProps} 
                shipping={25} 
                vat={100} 
                handleContinue={mockContinue}
            />
        );

        expect(screen.getAllByTestId('static-cart-item')).toHaveLength(3);
        // total
        expect(screen.getByText('$ 10'))
        // shipping
        expect(screen.getByText('$ 25'))
        // vat
        expect(screen.getByText('$ 100'))
        // grand total
        expect(screen.getByText('$ 135'))

    });

    it('Clicking continue calls handleContinue prop', async () => {
        const mockContinue = jest.fn();
        render(
            <CheckoutSummary 
                order={...checkoutThankYouProps} 
                shipping={25} 
                vat={100} 
                handleContinue={mockContinue}
            />
        );
        fireEvent.click(screen.getByRole('button'));
        expect(mockContinue).toHaveBeenCalled();
    });
});