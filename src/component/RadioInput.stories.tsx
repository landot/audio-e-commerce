import type { Meta, StoryFn } from '@storybook/react';
import RadioInput, { RadioInputProps } from './RadioInput';
import { useState } from 'react';

const meta = {
    title: 'RadioInput',
    component: RadioInput,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof RadioInput>;

export default meta;

const Template: StoryFn<RadioInputProps> = (args) => {
    const [checked, setChecked] = useState(args.checked);

    return (
        <RadioInput label={args.label} checked={checked} handleClick={() => setChecked(prev => !prev)} />
    )
}

export const Checked = Template.bind({});
Checked.args = {
    label: 'Check This?',
    checked: true,
}

export const NotChecked = Template.bind({});
NotChecked.args = {
    label: 'Check This?',
    checked: false,
}
