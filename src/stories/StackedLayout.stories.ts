import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { StackedLayout } from '..';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof StackedLayout> = {
  title: 'Layouts/Stacked Layout',
  component: StackedLayout,
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
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {},
};

export default meta;
type Story = StoryObj<typeof StackedLayout>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Main: Story = {
  args: {
    navigationOptions: [{
      name: 'Home',
      href: '/',
    }, {
      name: 'Users',
      href: '/users',
    }],
    userDropdownOptions: [{
      name: 'Logout',
      // href: '/logout',
      onClick: fn(),
    }],
    user: {
      name: 'Jack Lane',
      email: 'jack@gmail.com',
      imageUrl: ''
    },
    logoSrc: 'https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
  },
};
