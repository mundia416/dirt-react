import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Button } from '..';
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
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
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Button',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Button',
  },
};

export const Dark: Story = {
  args: {
    variant: 'dark',
    children: 'Button',
  },
};

export const Text: Story = {
  args: {
    variant: 'text',
    children: 'Button',
  },
};

export const Loading: Story = {
  args: {
    variant: 'primary',
    children: 'Button',
    loading: { variant: 'three-dots' }
  },
};


export const LeadingIcon: Story = {
  args: {
    children: 'Button',
    leadingIcon: MagnifyingGlassIcon
  },
};

export const LeadingIconString: Story = {
  args: {
    variant: 'outline',
    children: 'Button',
    leadingIcon: 'https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500'
  },
};


export const TrailingIcon: Story = {
  args: {
    children: 'Button',
    trailingIcon: MagnifyingGlassIcon
  },
};

export const TrailingIconString: Story = {
  args: {
    variant: 'outline',
    children: 'Button',
    trailingIcon: 'https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500'
  },
};

export const IconButton: Story = {
  args: {
    trailingIcon: XMarkIcon,
    variant: 'text'
  },
};

export const TypeSubmit: Story = {
  args: {
    children: 'Button',
    typeSubmit: true,
    onClick: fn()
  },
};


