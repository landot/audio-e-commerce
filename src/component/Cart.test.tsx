import React from 'react';
import { render, screen } from '@testing-library/react';
import Cart from './Cart';
import imageIcon from "../assets/product-xx59-headphones/desktop/image-product.jpg";
import { CartItemData } from './StaticCartItem';

describe('Cart Component', () => {
    const cartItemProps: CartItemData[] =
        [
            {
                name: 'XX99 MK II',
                price: 10,
                img: imageIcon,
                quantity: 3
            },
            {
                name: 'XX99 MK I',
                price: 11,
                img: imageIcon,
                quantity: 2
            },
        ];

  it('renders items in cart', () => {
    render(<Cart items={cartItemProps} />);
    expect(screen.getAllByTestId('editable-cart-item')).toHaveLength(2);
    expect(screen.getByText('Cart (2)')).toBeInTheDocument();
  });


  it('cart renders with no items in cart', () => {
    render(<Cart items={[]} />);
    expect(screen.queryByTestId('editable-cart-item')).not.toBeInTheDocument();
  });

//   todo
//   it('clicking checkout redirects to checkout page', () => {
//     render(<Cart items={[]} />);
//     expect(screen.queryByTestId('editable-cart-item')).not.toBeTruthy();
//   });

//   todo
//   it('clicking remove all button clears the cart', () => {
//     render(<Cart items={[]} />);
//     expect(screen.queryByTestId('editable-cart-item')).not.toBeTruthy();
//   });
});