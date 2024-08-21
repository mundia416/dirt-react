import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { SuccessAlert } from '..';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof SuccessAlert> = {
  title: 'Components/SuccessAlert',
  component: SuccessAlert,
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
type Story = StoryObj<typeof SuccessAlert>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Normal: Story = {
  args: {
    isShown: true,
    title: 'Successfully Submitted',
    content: 'You have successfully submitted the request'
  },
};



