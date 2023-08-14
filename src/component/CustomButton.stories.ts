import type { Meta, StoryObj } from '@storybook/react';
import CustomButton from './CustomButton';

const meta = {
  title: 'CustomButton',
  component: CustomButton,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof CustomButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'test',
    styles: {
        textColor: 'black',
        hoverTextColor: 'gray',
        backgroundColor: 'yellow',
        hoverBackgroundColor: 'orange',
        borderColor: 'blue',
        hoverBorderColor: 'cyan',
    }
  },
};

