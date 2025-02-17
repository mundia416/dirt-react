import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { ContentController } from '..';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof ContentController> = {
  title: 'Components/ContentController',
  component: ContentController,
  parameters: {
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
    loadingProps: {
      color: '#000',
      size: 'small'
    }
  },
};

export const LoadingFullScreen: Story = {
  args: {
    loading: true,
    loadingProps: {
      fullScreen: true,
      variant: 'infinity-spin',
    }
  },
};


export const Error: Story = {
  args: {
    error: true,
  },
};

export const ErrorFullScreen: Story = {
  args: {
    error: true,
    errorProps: {
      fullScreen: true
    }
  },
};

