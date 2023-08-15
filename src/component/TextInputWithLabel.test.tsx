import React from 'react';
import { render, screen } from '@testing-library/react';
import TextInputWithLabel, { TextInputWithLabelProps } from './TextInputWithLabel';

describe('TextInputWithLabel', () => {
  const mockProps: TextInputWithLabelProps = {
    title: 'Username',
    value: '',
    onChange: jest.fn(),
  };

  const mockPropsWithError: TextInputWithLabelProps = {
    title: 'Username',
    value: '',
    onChange: jest.fn(),
    error: 'error text'
  };

  it('renders input with title and error', () => {
    render(<TextInputWithLabel {...mockPropsWithError} />);

    const titleLabel = screen.getByText('Username');
    const inputElement = screen.getByLabelText('Username');
    const errorText = screen.getByText('error text');

    expect(titleLabel).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
    expect(errorText).toBeInTheDocument();
  });

//   it('calls onChange when input value changes', () => {
//     render(<TextInputWithLabel {...mockProps} />);

//     const inputElement = screen.getByLabelText('Username') as HTMLInputElement;
//     fireEvent.change(inputElement, { target: { value: 'new value' } });

//     expect(mockProps.onChange).toHaveBeenCalledTimes(1);
//   });

//   it('does not display error message when error prop is not provided', () => {
//     render(<TextInputWithLabel {...mockProps} error={undefined} />);

//     const errorText = screen.queryByText('error text');
//     expect(errorText).toBeNull();
//   });
});