import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import RadioInput from './RadioInput';

describe('RadioInput', () => {
    it('renders radio input with label', () => {
        render(
            <RadioInput label="Option 1" checked={false} />
        );

        const radioInput = screen.getByLabelText('Option 1');
        expect(radioInput).toBeInTheDocument();
    });

    it('calls handleClick when clicked and checked=false', () => {
        const handleClickMock = jest.fn();
        render(
            <RadioInput label="Option 2" checked={false} handleClick={handleClickMock} />
        );

        const radioInput = screen.getByLabelText('Option 2');
        fireEvent.click(radioInput);
        expect(handleClickMock).toHaveBeenCalledTimes(1);
    });

    it('calls handleClick when clicked and checked=true', () => {
        const handleClickMock = jest.fn();
        render(
            <RadioInput label="Option 2" checked={true} handleClick={handleClickMock} />
        );

        const radioInput = screen.getByLabelText('Option 2');
        fireEvent.click(radioInput);
        expect(handleClickMock).toHaveBeenCalledTimes(1);
    });

    it('displays checked radio when checked prop is true', () => {
        render(
            <RadioInput label="Option 3" checked={true} />
        );

        const radioInput = screen.getByLabelText('Option 3') as HTMLInputElement;
        expect(radioInput.checked).toBe(true);
    });

    it('displays unchecked radio when checked prop is false', () => {
        render(
            <RadioInput label="Option 4" checked={false} />
        );

        const radioInput = screen.getByLabelText('Option 4') as HTMLInputElement;
        expect(radioInput.checked).toBe(false);
    });
});