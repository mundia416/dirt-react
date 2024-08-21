import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Text } from '..';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
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
type Story = StoryObj<typeof Text>;


export const ExtraSmall: Story = {
  args: {
    children: "Hello World!",
    type: "text-extra-small"
  },
};

export const Small: Story = {
  args: {
    children: "Hello World!",
    type: "text-small"
  },
};


export const Normal: Story = {
  args: {
    children: "Hello World!",
  },
};


export const Large: Story = {
  args: {
    children: "Hello World!",
    type: "text-large"
  },
};

export const HeadingSmall: Story = {
  args: {
    children: "Hello World!",
    type: "heading-small"
  },
};

export const HeadingNormal: Story = {
  args: {
    children: "Hello World!",
    type: "heading"
  },
};

export const HeadingMedium: Story = {
  args: {
    children: "Hello World!",
    type: "heading-medium"
  },
};

export const HeadingLarge: Story = {
  args: {
    children: "Hello World!",
    type: "heading-large"
  },
};


