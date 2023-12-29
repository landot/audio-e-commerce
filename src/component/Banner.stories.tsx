import type { Meta, StoryObj } from '@storybook/react';
import Banner from './Banner';

const meta = {
    title: 'Banner',
    component: Banner,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof Banner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        text: 'New Product',
    },
};

