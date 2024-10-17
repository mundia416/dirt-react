import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { FieldInput } from '..';
import { LockClosedIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof FieldInput> = {
  title: 'Components/FieldInput',
  component: FieldInput,
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
  // args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof FieldInput>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Input: Story = {
  args: {
    element: 'input',
    label: 'Email Address'
  },
};

export const TextArea: Story = {
  args: {
    element: 'text-area',
    label: 'Description'

  },
};

export const LeadingIcon: Story = {
  args: {
    placeholder: 'Search',
    leadingIcon: MagnifyingGlassIcon
  },
};

export const TrailingIcon: Story = {
  args: {
    trailingIcon: LockClosedIcon,
    placeholder: "Password",
    type: 'password'
  },
};

export const LeadingText: Story = {
  args: {
    leadingText: '+260'
  },
};

export const TrailingText: Story = {
  args: {
    trailingText: '.com'
  },
};

export const Error: Story = {
  args: {
    error: true,
    helpText: 'This field cannot be empty'
  },
};

export const DatePicker: Story = {
  args: {
    type: 'date'
  },
};

export const CornerHelpText: Story = {
  args: {
    cornerHelpText: 'Optional',
    label: 'Email'
  },
};



export const Disabled: Story = {
  args: {
    element: 'input',
    label: 'Email Address',
    disabled: true
  },
};
