import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import AddQuantity from './AddQuantity';

describe('AddQuantity', () => {
    it('renders quantity and buttons', () => {
        const mockHandleQuantityUpdate = jest.fn();
        render(<AddQuantity quantity={3} handleIncrement={mockHandleQuantityUpdate} />);

        const minusButton = screen.getByText('-');
        const plusButton = screen.getByText('+');
        const quantityText = screen.getByText('3');

        expect(minusButton).toBeInTheDocument();
        expect(plusButton).toBeInTheDocument();
        expect(quantityText).toBeInTheDocument();
    });

    it('calls handleQuantityUpdate when minus button is clicked', () => {
        const mockHandleQuantityUpdate = jest.fn();
        render(<AddQuantity quantity={3} handleIncrement={mockHandleQuantityUpdate} />);

        const minusButton = screen.getByText('-');
        fireEvent.click(minusButton);

        expect(mockHandleQuantityUpdate).toHaveBeenCalledWith(-1);
    });

    it('calls handleQuantityUpdate when plus button is clicked', () => {
        const mockHandleQuantityUpdate = jest.fn();
        render(<AddQuantity quantity={3} handleIncrement={mockHandleQuantityUpdate} />);

        const plusButton = screen.getByText('+');
        fireEvent.click(plusButton);

        expect(mockHandleQuantityUpdate).toHaveBeenCalledWith(1);
    });
});
