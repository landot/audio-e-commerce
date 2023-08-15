import type { Meta, StoryFn } from '@storybook/react';
import TextInputWithLabel, { TextInputWithLabelProps } from './TextInputWithLabel';
import { useState } from 'react';

const meta = {
  title: 'TextInputWithLabel',
  component: TextInputWithLabel,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof TextInputWithLabel>;

export default meta;

const Template: StoryFn<TextInputWithLabelProps> = (args) => {
  const [value, setValue] = useState(args.value);

  return (
    <TextInputWithLabel 
      title={args.title}
      value={value}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
      error={args.error}
    />
  )
}

export const Primary = Template.bind({});
Primary.args = {
  title: 'Test',
  value: '',
}

export const WithText = Template.bind({});
WithText.args = {
  title: 'Test',
  value: 'asdf',
}

export const WithError = Template.bind({});
WithError.args = {
  title: 'Test',
  value: '',
  error: 'input cannot be empty',
}
