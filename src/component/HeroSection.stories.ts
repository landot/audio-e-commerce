import type { Meta, StoryObj } from '@storybook/react';
import HeroSection from './HeroSection';

const meta = {
  title: 'HeroSection',
  component: HeroSection,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof HeroSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  }
};

