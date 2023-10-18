import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { CartItemData } from './StaticCartItem';
import CheckoutThankYou from './CheckoutThankYou';
import imageIcon from "../assets/product-xx59-headphones/desktop/image-product.jpg";

describe('CheckoutThankYou Component', () => {
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

    it('clicking outside calls the hideModal function', async () => {
        const mockHide = jest.fn();
        render(
            <CheckoutThankYou 
                order={...checkoutThankYouProps} 
                showModal={true} 
                hideModal={mockHide} 
            />
        );

        expect(screen.getByRole('dialog')).toBeInTheDocument();
        const backdrop = screen.getAllByRole('presentation')[0].firstChild!;
        fireEvent.click(backdrop);
        expect(mockHide).toHaveBeenCalled();
    });

    it('modal is hidden when showModal=false', () => {
        const mockHide = jest.fn();
        render(
            <CheckoutThankYou 
                order={...checkoutThankYouProps} 
                showModal={false} 
                hideModal={mockHide} 
            />
        );

        expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });


    it('cart details can be expanded', () => {
        const mockHide = jest.fn();
        render(
            <CheckoutThankYou 
                order={...checkoutThankYouProps} 
                showModal={true} 
                hideModal={mockHide} 
            />
        );

        const expandItemsButton = screen.getByTestId('expand-items');
        fireEvent.click(expandItemsButton);

        expect(screen.queryAllByTestId('static-cart-item')).toHaveLength(3);
    });

    it('total price renders correctly', () => {
        const mockHide = jest.fn();
        render(
            <CheckoutThankYou 
                order={...checkoutThankYouProps} 
                showModal={true} 
                hideModal={mockHide} 
            />
        );

        expect(screen.getByTestId('total-cost').textContent).toBe('$ 10');
    });
});