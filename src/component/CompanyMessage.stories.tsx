import type { Meta, StoryObj } from '@storybook/react';
import CompanyMessage from './CompanyMessage';

const meta = {
    title: 'CompanyMessage',
    component: CompanyMessage,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof CompanyMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
};

