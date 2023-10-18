import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import CustomButton from './CustomButton';

describe('CustomButton', () => {
    const mockStyles = {
        textColor: 'red',
        backgroundColor: 'blue',
        borderColor: 'green',
        hoverTextColor: 'yellow',
        hoverBackgroundColor: 'purple',
        hoverBorderColor: 'orange',
    };

    it('renders button with label', () => {
        render(<CustomButton label="Click me" styles={mockStyles} />);
        const button = screen.getByText('Click me');
        expect(button).toBeInTheDocument();
    });

    it('triggers onClick when clicked', () => {
        const onClickMock = jest.fn();
        render(<CustomButton label="Click me" styles={mockStyles} onClick={onClickMock} />);
        const button = screen.getByText('Click me');
        fireEvent.click(button);
        expect(onClickMock).toHaveBeenCalledTimes(1);
    });
});