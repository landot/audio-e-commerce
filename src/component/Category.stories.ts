import type { Meta, StoryObj } from '@storybook/react';
import Category from './Category';
import speakerImg from '../assets/shared/desktop/image-category-thumbnail-speakers.png';

const meta = {
  title: 'Category',
  component: Category,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Category>;

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

