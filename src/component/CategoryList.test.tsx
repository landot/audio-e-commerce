import React from 'react';
import { render, screen } from '@testing-library/react';
import CategoryList from './CategoryList';
import headphones from '../assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg';
import { CategoryItemProps } from './CategoryItem';

describe('CategoryList Component', () => {
    const CategoryListProps: CategoryItemProps[] = [
        {
            img: headphones,
            newProduct: true,
            name: 'Sample Product',
            description: 'This is a sample product description.',
            href: '/sample-link',
            reverse: false
        },
        {
            img: headphones,
            newProduct: true,
            name: 'Sample Product 2',
            description: 'This is a sample product description.',
            href: '/sample-link',
            reverse: true
        },
    ];

  it('items are reversed', () => {
    render(<CategoryList categoryItems={...CategoryListProps} />);
    const listItems = screen.getAllByRole('listitem');
    expect(listItems.length).toBe(2);
  });
});