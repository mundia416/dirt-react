import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { PhoneInput } from '..';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof PhoneInput> = {
  title: 'Components/PhoneInput',
  component: PhoneInput,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  //   tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // size: { control: 'color' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onChange: fn() },
};

export default meta;
type Story = StoryObj<typeof PhoneInput>;


export const Default: Story = {
  args: {
    onChange: fn(),
    label: "Phone Number",
  },
};

export const WithDefaultValue: Story = {
  args: {
    onChange: fn(),
    label: "Pgone Number",
    value: "0974179979"
  },
};



