import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Alert, ErrorAlert, SuccessAlert } from '..';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
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

  args: {
    onPositiveClick: fn(),
    onNegativeClick: fn(),
    onCloseComplete: fn()
  },

};

export default meta;
type Story = StoryObj<typeof Alert>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Warning: Story = {
  args: {
    isShown: true,
    title: 'Title',
    content: 'Content description',
    variant: 'warning',
  },
};

export const Error: Story = {
  args: {
    isShown: true,
    title: 'Title',
    content: 'Content description',
    variant: 'error'
  },
};

export const Success: Story = {
  args: {
    isShown: true,
    title: 'Title',
    content: 'Content description',
    variant: 'success'
  },
};

export const Info: Story = {
  args: {
    isShown: true,
    title: 'Title',
    content: 'Content description',
    variant: 'info'
  },
};

export const WithDismiss: Story = {
  args: {
    isShown: true,
    title: 'Title',
    content: 'Content description',
    variant: 'info',
    showDismiss: true
  },
};


export const WithActionButtons: Story = {
  args: {
    isShown: true,
    title: 'Title',
    content: 'Content description',
    variant: 'info',
    positiveText: 'Continue',
    negativeText: 'Cancel',
    onPositiveClick: fn(),
    onNegativeClick: fn(),
  },
};



