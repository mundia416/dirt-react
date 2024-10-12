import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Notification } from '..';
import { BuildingLibraryIcon } from '@heroicons/react/24/outline';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Notification> = {
  title: 'Components/Notification',
  component: Notification,
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
};

export default meta;
type Story = StoryObj<typeof Notification>;


export const Main: Story = {
  args: {
    open: true,
    title: "Hello World!",
    content: "Upgraded your account"
  },
};

export const CustomIcon: Story = {
  args: {
    open: true,
    title: "Hello World!",
    content: "Upgraded your account",
    icon: BuildingLibraryIcon,
    iconClassname: 'text-orange-500'
  },
};
