import type { Meta, StoryObj } from 'storybook-framework-qwik';

import { Button, type ButtonPropsInterface } from './button';

const meta: Meta<ButtonPropsInterface> = {
    component: Button,
};

export default meta;

export const Primary: StoryObj<ButtonPropsInterface> = {
    args: {
        size: 'medium',
    },
    render: (props) => <Button {...props}>Some button</Button>,
};
