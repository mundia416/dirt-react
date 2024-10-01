import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { BrandedSelect } from '..';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof BrandedSelect> = {
  title: 'Components/BrandedSelect',
  component: BrandedSelect,
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
type Story = StoryObj<typeof BrandedSelect>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    options: [
      {
        id: 'b',
        title: 'Draft',
        description: "the job can be viewed by anyone with a link the job can be viewed by anyone with a link the job can be viewed by anyone with a link the job can be viewed by anyone with a link the job can be viewed by anyone with a link the job can be viewed by anyone with a link the job can be viewed by anyone with a link",
        descriptionMaxLines: 2
      }, {
        id: 'a',
        title: "Published",
        description: "the job can be viewed by anyone with a link"
      },
      {
        id: 'b',
        title: 'Draft'
      },
    ],
    onSelect: fn()
  },
};
