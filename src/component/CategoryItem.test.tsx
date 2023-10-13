import React from 'react';
import { render, screen } from '@testing-library/react';
import CategoryItem from './CategoryItem';
import headphones from '../assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg';

describe('CategoryItem Component', () => {
  const newProductProps = {
    img: headphones,
    newProduct: true,
    name: 'Sample Product',
    description: 'This is a sample product description.',
    href: '/sample-link',
  };

  const oldProductProps = {
    ...newProductProps,
    newProduct: false
  };

  it('renders with new product tag', () => {
    render(<CategoryItem {...newProductProps} />);
    const newProductTag = screen.getByText('New Product');
    expect(newProductTag).toBeInTheDocument();
  });

  it('renders without new product tag', () => {
    render(<CategoryItem {...oldProductProps} />);
    const newProductTag = screen.queryByText('New Product');
    expect(newProductTag).not.toBeInTheDocument();
  });

  it('renders product description', () => {
    render(<CategoryItem {...newProductProps} />);
    const description = screen.getByText(newProductProps.description);
    const name = screen.getByText(newProductProps.name);
    expect(description).toBeInTheDocument();
    expect(name).toBeInTheDocument();
  });

  it('renders button with correct href', () => {
    render(<CategoryItem {...newProductProps} />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', newProductProps.href);
  });
});