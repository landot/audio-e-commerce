import type { Meta, StoryObj } from '@storybook/react';
import StaticCartItem from './StaticCartItem';
import imageIcon from "../assets/product-xx59-headphones/desktop/image-product.jpg";

const meta = {
    title: 'StaticCartItem',
    component: StaticCartItem,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof StaticCartItem>;

export default meta;
type Story = StoryObj<typeof meta>;
export const OneItem: Story = {
    args: {
        name: 'XX99 MK II',
        price: 2999,
        img: imageIcon,
        quantity: 1
    }
};
