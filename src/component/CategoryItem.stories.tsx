import type { Meta, StoryObj } from '@storybook/react';
import CategoryItem from './CategoryItem';
import headphones from '../assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg';

const meta = {
    title: 'CategoryItem',
    component: CategoryItem,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof CategoryItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Product: Story = {
    args: {
        img: headphones, 
        newProduct: false,
        name: 'XX99 Mark II Headphones', 
        description: 'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.',
        href: 'asdf'
    },
};

export const NewProduct: Story = {
    args: {
        img: headphones, 
        newProduct: true,
        name: 'XX99 Mark II Headphones', 
        description: 'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.',
        href: 'asdf'
    },
};
  
