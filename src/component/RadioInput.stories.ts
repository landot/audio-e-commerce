import type { Meta, StoryObj } from '@storybook/react';
import RadioInput from './RadioInput';
import { action } from '@storybook/addon-actions';

const meta = {
  title: 'RadioInput',
  component: RadioInput,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof RadioInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Checked: Story = {
  args: {
    label: 'Check This?',
    checked: true
  },
};


export const NotChecked: Story = {
    args: {
        label: 'Check This?',
        checked: false
    },
  };
  
