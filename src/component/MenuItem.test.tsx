import React from 'react';
import { render, screen } from '@testing-library/react';
import Category from './MenuItem';
import speakerImg from '../assets/shared/desktop/image-category-thumbnail-speakers.png';

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));


describe('Category component', () => {
  it('renders category correctly', () => {
    render(<Category img={speakerImg} name={'speakers'} href={'/asdf'} />);
    expect(screen.getByText('speakers')).toBeInTheDocument();
    expect(screen.getByText('shop')).toBeInTheDocument();
  });
});