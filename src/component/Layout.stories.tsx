import type { Meta, StoryObj } from '@storybook/react';
import Layout from './Layout';

const meta = {
    title: 'Layout',
    component: Layout,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof Layout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: <div>inner content</div>
    },
};

