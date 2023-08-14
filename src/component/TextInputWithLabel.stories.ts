import type { Meta, StoryObj } from '@storybook/react';
import TextInputWithLabel from './TextInputWithLabel';
import { action } from '@storybook/addon-actions';

const meta = {
  title: 'TextInputWithLabel',
  component: TextInputWithLabel,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof TextInputWithLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: 'test',
    value: '',
    onChange: action('text change')
  },
};

export const WithText: Story = {
    args: {
      title: 'Test',
      value: 'asdfasdfasdf',
      onChange: action('text change')
    },
  };

export const WithError: Story = {
    args: {
      title: 'Test',
      value: '',
      error: 'input cannot be empty',
      onChange: action('text change')
    },
  };

