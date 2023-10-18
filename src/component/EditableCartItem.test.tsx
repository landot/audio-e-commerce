import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import EditableCartItem, { EditableCartItemProps } from './EditableCartItem';
import imageIcon from "../assets/product-xx59-headphones/desktop/image-product.jpg";

describe('EditableCartItem Component', () => {
    const handleCountChangeMock = jest.fn();
    const cartItemProps: EditableCartItemProps = {
        item: {
            name: 'XX99 MK II',
            price: 10,
            img: imageIcon,
            quantity: 3
        }, 
        handleCountChange: handleCountChangeMock
    }

    it('renders product details correctly', () => {
        render(<EditableCartItem {...cartItemProps} />);

        expect(screen.getByAltText('product image')).toBeInTheDocument();
        expect(screen.getByText(cartItemProps.item.name)).toBeInTheDocument();
        expect(screen.getByText('3')).toBeInTheDocument();
        expect(screen.getByText('$ 10')).toBeInTheDocument();
    });


    it('clicking minus lowers product count', () => {
        render(<EditableCartItem {...cartItemProps} />);
        const buttons = screen.getAllByRole('button');

        if(buttons[0]) {
            fireEvent.click(buttons[0]);
        } else {
            throw Error('buttons not found')
        }
        expect(handleCountChangeMock).toBeCalledWith(-1);
    });

    it('clicking plus increases product count', () => {
        render(<EditableCartItem {...cartItemProps} />);
        const buttons = screen.getAllByRole('button');

        if(buttons[0]) {
            fireEvent.click(buttons[1]);
        } else {
            throw Error('buttons not found')
        }
        expect(handleCountChangeMock).toBeCalledWith(1);
    });


});