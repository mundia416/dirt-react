import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import React from 'react'
import { BrandedSelect, SidebarLayout } from '..';
import { HomeIcon, UserIcon } from '@heroicons/react/24/outline';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof SidebarLayout> = {
  title: 'Layouts/Sidebar Layout',
  component: SidebarLayout,
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
type Story = StoryObj<typeof SidebarLayout>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Main: Story = {
  args: {
    navigationGroups: [
      {
        navigationOptions: [{
          name: 'Home',
          href: '/',
          icon: HomeIcon
        }, {
          name: 'User',
          href: '/',
          icon: UserIcon
        }]
      },
      {
        navigationOptions: [{
          name: 'Plugins',
          href: '/',
          icon: HomeIcon
        }, {
          name: 'Products',
          href: '/',
          icon: UserIcon
        }]
      },
      {
        heading: 'Borrowers',
        navigationOptions: [{
          name: 'View Borrowers',
          href: '/',
          icon: HomeIcon
        }, {
          name: 'View Loans',
          href: '/',
          icon: UserIcon
        }]
      }
    ],
    userDropdownOptions: [{
      name: 'Logout',
      // href: '/logout',
      onClick: fn(),
    }],
    user: {
      name: 'Jack Lane',
      // email: 'jack@gmail.com',
      imageUrl: ''
    },
    logoSrc: 'https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
  },
};

export const CustomHeaderContent: Story = {
  args: {
    navigationGroups: [
      {
        navigationOptions: [{
          name: 'Home',
          href: '/',
          icon: HomeIcon
        }, {
          name: 'User',
          href: '/',
          icon: UserIcon
        }]
      },
      {
        navigationOptions: [{
          name: 'Plugins',
          href: '/',
          icon: HomeIcon
        }, {
          name: 'Products',
          href: '/',
          icon: UserIcon
        }]
      },
      {
        heading: 'Borrowers',
        navigationOptions: [{
          name: 'View Borrowers',
          href: '/',
          icon: HomeIcon
        }, {
          name: 'View Loans',
          href: '/',
          icon: UserIcon
        }]
      }
    ],
    customHeaderContent: <div className='flex items-center justify-start w-full relative'>
      <BrandedSelect
        className=''
        options={[{
          id: 'abc',
          title: 'Main Branch'
        }]}
        onSelect={() => { }}
      /></div>,
    userDropdownOptions: [{
      name: 'Logout',
      // href: '/logout',
      onClick: fn(),
    }],
    user: {
      name: 'Jack Lane',
      // email: 'jack@gmail.com',
      imageUrl: ''
    },
    logoSrc: 'https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
  },
};

