import type { Meta, StoryObj } from '@storybook/react';
import imageIcon from "../assets/product-xx59-headphones/desktop/image-product.jpg";
import Cart from './Cart';

const meta = {
  title: 'Cart',
  component: Cart,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Cart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
          items: [
              {
                  name: 'XX99 MK II',
                  price: 2999,
                  img: imageIcon,
                  quantity: 1
              },
              {
                  name: 'XX99 MK I',
                  price: 1111,
                  img: imageIcon,
                  quantity: 2
              },
          ],
      }
};

export const NoItems: Story = {
    args: {
          items: [],
      }
};

export const ScrollableCart: Story = {
  args: {
        items: [
            {
                name: 'XX99 MK II',
                price: 2999,
                img: imageIcon,
                quantity: 1
            },
            {
                name: 'XX99 MK I',
                price: 1111,
                img: imageIcon,
                quantity: 2
            },            {
                name: 'XX99 MK II',
                price: 2999,
                img: imageIcon,
                quantity: 1
            },
            {
                name: 'XX99 MK I',
                price: 1111,
                img: imageIcon,
                quantity: 2
            },            {
                name: 'XX99 MK II',
                price: 2999,
                img: imageIcon,
                quantity: 1
            },
            {
                name: 'XX99 MK I',
                price: 1111,
                img: imageIcon,
                quantity: 2
            },
        ],
    }
};
