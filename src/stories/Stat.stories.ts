import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Stat } from '..';
import { UsersIcon } from '@heroicons/react/24/outline';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Stat> = {
  title: 'Components/Stat',
  component: Stat,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    // layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  //   tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // size: { control: 'color' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {},
};

export default meta;
type Story = StoryObj<typeof Stat>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Normal: Story = {
  args: {
    name: 'Total Subscribers',
    value: '71,897',
    icon: UsersIcon,
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Change: Story = {
  args: {
    name: 'Total Subscribers',
    value: '71,897',
    icon: UsersIcon,
    iconBackgroundColor: 'bg-red-500',
    change: { value: '3.5%', type: 'increase' }
  },
};


// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const ActionButton: Story = {
  args: {
    name: 'Total Subscribers',
    value: '71,897',
    icon: UsersIcon,
    actionButtonOnClick: fn(),
    actionButtonText: 'Refresh',
    iconBackgroundColor: 'bg-green-500'
  },
};


// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const All: Story = {
  args: {
    name: 'Total Subscribers',
    value: '71,897',
    icon: UsersIcon,
    change: { value: '3.5%', type: 'increase' },
    actionButtonOnClick: fn(),
  },
};

