import type { Meta, StoryObj } from '@storybook/react';
import CartItem from './CartItem';
import imageIcon from "../assets/product-xx59-headphones/desktop/image-product.jpg";

const meta = {
  title: 'CartItem',
  component: CartItem,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof CartItem>;

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
