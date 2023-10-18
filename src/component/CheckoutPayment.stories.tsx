import type { Meta, StoryObj } from '@storybook/react';
import CheckoutPayment from './CheckoutPayment';

const meta = {
    title: 'CheckoutPayment',
    component: CheckoutPayment,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof CheckoutPayment>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
};
