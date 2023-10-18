import type { Meta, StoryObj } from '@storybook/react';
import CheckoutSummary from './CheckoutSummary';
import imageIcon from "../assets/product-xx59-headphones/desktop/image-product.jpg";

const meta = {
    title: 'CheckoutSummary',
    component: CheckoutSummary,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof CheckoutSummary>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        order: [
            {
                name: 'XX99 MK II',
                price: 2999,
                img: imageIcon,
                quantity: 1
            },
            {
                name: 'XX99 MK II',
                price: 29,
                img: imageIcon,
                quantity: 2
            },
            {
                name: 'XX99 MK II',
                price: 299,
                img: imageIcon,
                quantity: 3
            },            
        ],
        shipping: 50,
        vat: 1000
    }
};  
