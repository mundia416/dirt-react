import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Tabs } from '..';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {

  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  //   tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // size: { control: 'color' },
    onTabClick: fn()
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
};

export default meta;
type Story = StoryObj<typeof Tabs>;


export const Main: Story = {
  args: {
    tabs: [{
      id: 'a',
      name: "General"
    }, {
      id: 'b',
      name: "Team"
    }, {
      id: 'c',
      name: "Site"
    },],
    activeTabId: 'b',
    onTabClick: (id) => console.log("tab click ", id)
  },
};
