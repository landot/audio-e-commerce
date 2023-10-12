import type { Meta, StoryObj } from '@storybook/react';
import MenuItem from './MenuItem';
import speakerImg from '../assets/shared/desktop/image-category-thumbnail-speakers.png';

const meta = {
  title: 'MenuItem',
  component: MenuItem,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof MenuItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    img: speakerImg,
    name: 'speakers', 
    href: ''
  },
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  }
};

