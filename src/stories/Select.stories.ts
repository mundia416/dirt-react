import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Select } from '..';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
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
    onChange: fn(),
    search: {
      onSearchChange: fn(),
      onSearchChangeDebounce: fn()

    },
    onScrollToBottom: fn()
  }
};

export default meta;
type Story = StoryObj<typeof Select>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    options: [
      {
        id: 'b',
        title: 'Draft',
      }, {
        id: 'a',
        title: "Published",
        secondaryText: 'danny@gmail.com'
      },
      {
        id: 'c',
        title: 'Draft Part 2'
      },
    ],
    value: {
      id: 'c',
      title: 'Draft Part 2'
    },
    onChange: fn(),
    onScrollToBottom: fn(),
    className: 'min-w-44'

  },
};

export const CustomClassname: Story = {
  args: {
    options: [
      {
        id: 'b',
        title: 'Draft',
      }, {
        id: 'a',
        title: "Published",
      },
      {
        id: 'c',
        title: 'Draft Part 2'
      },
    ],
    onChange: fn(),
    onScrollToBottom: fn(),
    className: 'w-full py-6 min-w-44'
  },
};


export const Label: Story = {
  args: {
    label: "First Name",
    options: [
      {
        id: 'b',
        title: 'Draft',
      }, {
        id: 'a',
        title: "Published",
      },
      {
        id: 'c',
        title: 'Draft Part 2'
      },
    ],
    onChange: fn(),
    onScrollToBottom: fn(),
    className: 'min-w-44'

  },
};

export const Search: Story = {
  args: {
    label: "First Name",
    onScrollToBottom: fn(),
    options: [
      {
        id: 'b',
        title: 'Draft',
      }, {
        id: 'a',
        title: "Published",
        secondaryText: "published with ease"
      },
      {
        id: 'c',
        title: 'Draft Part 2'
      }, {
        id: 'b',
        title: 'Draft',
      }, {
        id: 'a',
        title: "Published",
        secondaryText: "published with ease"
      },
      {
        id: 'c',
        title: 'Draft Part 2'
      }, {
        id: 'b',
        title: 'Draft',
      }, {
        id: 'a',
        title: "Published",
        secondaryText: "published with ease"
      },
      {
        id: 'c',
        title: 'Draft Part 2'
      },
    ],
    onChange: fn(),
    className: 'min-w-60',
    search: {
      onSearchChange: fn(),
      onSearchChangeDebounce: fn(),
      debounceDelayMillis: 1000
    }
  },
};

export const Loading: Story = {
  args: {
    loading:true,
    loadingProps:{
      size: 'small'
    },
    options: [
      {
        id: 'b',
        title: 'Draft',
      }, {
        id: 'a',
        title: "Published",
        secondaryText: 'danny@gmail.com'
      },
      {
        id: 'c',
        title: 'Draft Part 2'
      },
    ],
    value: {
      id: 'c',
      title: 'Draft Part 2'
    },
    onChange: fn(),
    onScrollToBottom: fn(),
    className: 'min-w-44'

  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    options: [
      {
        id: 'b',
        title: 'Draft',
      }, {
        id: 'a',
        title: "Published",
        secondaryText: 'danny@gmail.com'
      },
      {
        id: 'c',
        title: 'Draft Part 2'
      },
    ],
    value: {
      id: 'c',
      title: 'Draft Part 2'
    },
    onChange: fn(),
    onScrollToBottom: fn(),
    className: 'min-w-44'

  },
};