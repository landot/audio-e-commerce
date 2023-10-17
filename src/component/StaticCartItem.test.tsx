import React from 'react';
import { render, screen } from '@testing-library/react';
import CartItem, { CartItemData } from './StaticCartItem';
import imageIcon from "../assets/product-xx59-headphones/desktop/image-product.jpg";

describe('CartItem Component', () => {
    const cartItemProps: CartItemData = {
        name: 'XX99 MK II',
        price: 10,
        img: imageIcon,
        quantity: 3
    }

  it('renders product details correctly', () => {
    render(<CartItem {...cartItemProps} />);

    expect(screen.getByAltText('product image')).toBeInTheDocument();
    expect(screen.getByText(cartItemProps.name)).toBeInTheDocument();
    expect(screen.getByText('x3')).toBeInTheDocument();
    expect(screen.getByText('$ 10')).toBeInTheDocument();
  });
});