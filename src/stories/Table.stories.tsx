import React from 'react'
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Button, Table } from '..';
import { RowsProps } from '../components/table';

const people = [
  { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
  { name: 'Michael Scott', title: 'Regional Manager', email: 'michael.scott@example.com', role: 'Admin' },
  { name: 'Pam Beesly', title: 'Receptionist', email: 'pam.beesly@example.com', role: 'Member' },
  { name: 'Jim Halpert', title: 'Sales Representative', email: 'jim.halpert@example.com', role: 'Member' },
  { name: 'Dwight Schrute', title: 'Assistant to the Regional Manager', email: 'dwight.schrute@example.com', role: 'Admin' },
  { name: 'Angela Martin', title: 'Accountant', email: 'angela.martin@example.com', role: 'Member' },
  { name: 'Stanley Hudson', title: 'Sales Representative', email: 'stanley.hudson@example.com', role: 'Member' }
];


const rowData: RowsProps[] = people.map(person => {
  return {
    items: [{
      value: person.name,
      bold: true
    },
    {
      value: person.title,
    }, {
      value: person.email,
    }, {
      value: person.role,
    }, {
      value: <div>
        <Button
          size='extra-small'
          className='text-indigo-500'
          variant='text'
        >Edit</Button>
      </div>
    }]
  }
})

const columnTitles = [{
  name: 'Name'
}, {
  name: 'Title'
}, {
  name: 'Email'
}, {
  name: 'Role'
},
]

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
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
type Story = StoryObj<typeof Table>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Main: Story = {
  args: {
    columnTitles,
    rowData
  },
};

export const Heading: Story = {
  args: {
    heading: 'Users',
    columnTitles,
    rowData
  },
};

export const SubHeading: Story = {
  args: {
    heading: 'Users',
    subHeading: 'A list of all the users in your account including their name, title, email and role.',
    columnTitles,
    rowData
  },
}

export const ActionButton: Story = {
  args: {
    heading: 'Users',
    subHeading: 'A list of all the users in your account including their name, title, email and role.',
    actionButton: {
      text: 'Add Users',
      onClick: fn()
    },
    columnTitles,
    rowData
  },
};




