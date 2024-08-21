import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { ContentController } from '..';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof ContentController> = {
  title: 'Components/ContentController',
  component: ContentController,
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
};

export default meta;
type Story = StoryObj<typeof ContentController>;

export const Data: Story = {
  args: {
    children: 'has data',
    data: true,
  },
};


export const Loading: Story = {
  args: {
    loading: true,
  },
};

export const Error: Story = {
  args: {
    error: true,
  },
};

