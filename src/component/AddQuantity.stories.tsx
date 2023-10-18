import type { Meta, StoryFn } from '@storybook/react';
import { useState } from 'react';
import AddQuantity, { AddQuantityProps } from './AddQuantity';

const meta = {
    title: 'AddQuantity',
    component: AddQuantity,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof AddQuantity>;

export default meta;

const Template: StoryFn<AddQuantityProps> = (args) => {
    const [quantity, setQuantity] = useState(args.quantity);

    return (
        <AddQuantity 
            quantity={quantity} 
            handleIncrement={(i: number ) => setQuantity(prev => prev += i)}      
        />
    )
}

export const Primary = Template.bind({});
Primary.args = {
    quantity: 0
}
