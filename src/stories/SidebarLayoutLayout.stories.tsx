import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import React from 'react'
import { BrandedSelect, Button, SidebarLayout } from '..';
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
          icon: HomeIcon,
          subItems: [{
            name: 'Plugin 1',
            href: '/',
          }, {
            name: 'Plugin 2',
            href: '/',
          }]
        }],
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
    logoSrc: 'https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500'
  },
};

export const ThinSidebar: Story = {
  args: {
    sidebar: 'thin',
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
    logoSrc: 'https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500',
    children: <div className='w-full h-full bg-red-500'>text content</div>
  },
};


export const CustomHeaderContent: Story = {
  args: {
    children: <div>
      <Button>Click me</Button>
    </div>,
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
        value={{
          id: 'c',
          title: 'Draft With a very long title',
          description: "the job can be viewed by anyone with a link the job can be viewed by anyone with a link the job can be viewed by anyone with a link the job can be viewed by anyone with a link the job can be viewed by anyone with a link the job can be viewed by anyone with a link the job can be viewed by anyone with a link",
          descriptionMaxLines: 2
        }}
        options={[{
          id: 'abc',
          title: 'Main Branch'
        },
        {
          id: 'c',
          title: 'Draft',
          description: "the job can be viewed by anyone with a link the job can be viewed by anyone with a link the job can be viewed by anyone with a link the job can be viewed by anyone with a link the job can be viewed by anyone with a link the job can be viewed by anyone with a link the job can be viewed by anyone with a link",
          descriptionMaxLines: 2
        }]}
        onChange={() => { }}
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
    xmarkPadding: 'pt-24',
    logoPadding: 'pt-24',
    logoSrc: 'https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500'
  },
};

