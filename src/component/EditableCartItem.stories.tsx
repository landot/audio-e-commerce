import type { Meta, StoryObj } from '@storybook/react';
import imageIcon from "../assets/product-xx59-headphones/desktop/image-product.jpg";
import EditableCartItem from './EditableCartItem';

const meta = {
  title: 'EditableCartItem',
  component: EditableCartItem,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof EditableCartItem>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {
  args: {
        item: {
            name: 'XX99 MK II',
            price: 2999,
            img: imageIcon,
            quantity: 1
        },
        handleCountChange: () => null,
    }
};
