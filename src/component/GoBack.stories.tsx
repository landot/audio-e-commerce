import type { Meta, StoryObj } from '@storybook/react';
import GoBack from './GoBack';

const meta = {
    title: 'GoBack',
    component: GoBack,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof GoBack>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        href: 'blah'
    },
};

