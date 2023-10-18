import React from 'react';
import { render, screen } from '@testing-library/react';
import Promotion from './Promotion';

describe('Promotion component', () => {
  it('renders hero section correctly', () => {
    render(<Promotion />);
    expect(screen.getByText('ZX9 Speaker')).toBeInTheDocument();
    expect(screen.getByText('ZX7 Speaker')).toBeInTheDocument();
    expect(screen.getByText('YX1 Earphones')).toBeInTheDocument();
  });
});
