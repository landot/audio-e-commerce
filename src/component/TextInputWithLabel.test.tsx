import React from 'react';
import { render, screen } from '@testing-library/react';
import TextInputWithLabel, { TextInputWithLabelProps } from './TextInputWithLabel';
import userEvent from '@testing-library/user-event';

describe('TextInputWithLabel', () => {
  const mockProps: TextInputWithLabelProps = {
    title: 'Username',
    value: '',
    onChange: jest.fn(),
  };

  const mockPropsWithError: TextInputWithLabelProps = {
    ...mockProps,
    error: 'error text'
  };

  it('renders input with title and error', () => {
    render(<TextInputWithLabel {...mockPropsWithError} />);

    const titleLabel = screen.getByText('Username');
    const inputElement = screen.getByLabelText('Username');
    const errorText = screen.getByLabelText('error text');

    expect(titleLabel).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
    expect(errorText).toBeInTheDocument();
  });

  it('calls onChange when input value changes', async () => {
    render(<TextInputWithLabel {...mockProps} />);

    const inputElement = screen.getByRole('textbox');
    await userEvent.type(inputElement, 'a');

    expect(mockProps.onChange).toHaveBeenCalledTimes(1);
  });

  it('does not display error message when error prop is not provided', () => {
    render(<TextInputWithLabel {...mockProps} error={undefined} />);

    const errorText = screen.queryByLabelText('error text');
    expect(errorText).toBeNull();
  });
});