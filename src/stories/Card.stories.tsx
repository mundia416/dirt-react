import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import React from 'react'
import { Card } from '..';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
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
type Story = StoryObj<typeof Card>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Normal: Story = {
  args: {
    className: 'w-64 h-64',
  },
};

export const WithHeader: Story = {
  args: {
    className: "w-64 h-64",
    header: {
      "heading": "Title",
      "subHeading": "Subheading"
    }
  },
};

export const ContentPadding: Story = {
  args: {
    className: "w-64 h-64",
    contentClassName: "p-8 ",
    header: {
      "heading": "Title",
      "subHeading": "Subheading"
    },
    children: <div className='w-full h-full bg-yellow-400'>Hello world </div>
  },
};


