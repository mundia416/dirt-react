import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { AvatarUpload } from '..';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof AvatarUpload> = {
  title: 'Components/AvatarUpload',
  component: AvatarUpload,
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
  args: {
    onChange: fn()
  },
};

export default meta;
type Story = StoryObj<typeof AvatarUpload>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Main: Story = {
  args: {
    onChange: fn()
  },
};

export const Disabled: Story = {
  args: {
    onChange: fn(),
    disabled: true
  },
};
