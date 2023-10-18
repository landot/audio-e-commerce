import type { Meta, StoryObj } from '@storybook/react';
import Promotion from './Promotion';

const meta = {
  title: 'Promotion',
  component: Promotion,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Promotion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

