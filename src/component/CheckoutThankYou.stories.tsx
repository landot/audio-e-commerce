import type { Meta, StoryObj } from '@storybook/react';
import CheckoutThankYou from './CheckoutThankYou';
import imageIcon from "../assets/product-xx59-headphones/desktop/image-product.jpg";

const meta = {
    title: 'CheckoutThankYou',
    component: CheckoutThankYou,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof CheckoutThankYou>;

export default meta;
type Story = StoryObj<typeof meta>;
export const OneItem: Story = {
    args: {
        showModal: true,
        order: [
            {
                name: 'XX99 MK II',
                price: 2999,
                img: imageIcon,
                quantity: 1
            },
        ],
    }
};

export const TwoItems: Story = {
    args: {
        showModal: true,
        hideModal: () => console.log('clicking outside'),
        order: [
            {
                name: 'XX99 MK II',
                price: 2999,
                img: imageIcon,
                quantity: 1
            },
            {
                name: 'XX99 MK IIIII',
                price: 1111,
                img: imageIcon,
                quantity: 3
            },
        ],
    }
};
