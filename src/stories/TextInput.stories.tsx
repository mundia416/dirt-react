import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import type { Meta, StoryObj, StoryFn } from '@storybook/react';
import { fn } from '@storybook/test';

import { TextInput } from '..';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof TextInput> = {
  title: 'Components/TextInput',
  component: TextInput,
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
  args: { onChangeDebounce: fn() },
};

export default meta;
type Story = StoryObj<typeof TextInput>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Input: Story = {
  args: {
    element: 'input',
  },
};

export const TextArea: Story = {
  args: {
    element: 'text-area',
  },
};

export const FileUpload: Story = {
  args: {
    type: 'file',
    onFilesChange: (files) => console.log({ files })
  },
};

export const Debounce: Story = {
  args: {
    element: 'input',
    debounceDelayMillis: 1000,
    onChangeDebounce: fn()
  },
};

export const DateFormat: Story = {
  args: {
    type: 'date',
    pattern: 'yyyy-mm-dd',
  },
  render: (args) => {
    const [dateValue, setDateValue] = useState<string>('');
    
    return (
      <div>
        <TextInput
          {...args}
          value={dateValue}
          onChange={(value) => {
            setDateValue(value);
            console.log('Date changed:', value);
          }}
        />
        <div style={{ marginTop: '10px', fontSize: '14px', color: '#666' }}>
          Selected date: {dateValue || 'None'}
        </div>
      </div>
    );
  },
};
