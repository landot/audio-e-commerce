import type { Meta, StoryObj } from '@storybook/react';
import CategoryList from './CategoryList';
import headphones from '../assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg';

const meta = {
  title: 'CategoryList',
  component: CategoryList,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof CategoryList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        categoryItems: [
            {
                img: headphones, 
                newProduct: false,
                name: 'XX99 Mark II Headphones', 
                description: 'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.',
                href: 'asdf',
                reverse: false,
            },
            {
                img: headphones, 
                newProduct: false,
                name: 'XX99 Mark II Headphones 2', 
                description: 'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.',
                href: 'asdf',
                reverse: true,
            },
            {
                img: headphones, 
                newProduct: false,
                name: 'XX99 Mark II Headphones 3', 
                description: 'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.',
                href: 'asdf',
                reverse: false,
            },
        ],
    }
};  
