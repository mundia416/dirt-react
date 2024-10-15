import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import React from 'react'
import { Dialog, Stat, Table } from '..';
import { UsersIcon } from '@heroicons/react/24/outline';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Dialog> = {
  title: 'Components/Dialog',
  component: Dialog,
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
type Story = StoryObj<typeof Dialog>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Confirm: Story = {
  args: {
    isOpen: true,
    title: 'Deactivate account',
    description: 'Are you sure you want to deactivate your account? All of your data will be permanently removed.',
    primaryBtnText: 'Deactivate',
    secondaryBtnText: "Cancel",
    onClose: fn(),
    type: 'confirm',
    primaryBtnOnClick: fn(),
    secondaryBtnOnClick: fn()
  },
};

export const Success1: Story = {
  args: {
    isOpen: true,
    title: 'Payment Successful',
    description: 'Are you sure you want to deactivate your account? All of your data will be permanently removed.',
    primaryBtnText: 'Deactivate',
    secondaryBtnText: "Cancel",
    onClose: fn(),
    type: 'success',
    primaryBtnOnClick: fn(),
    secondaryBtnOnClick: fn()
  },
};

export const Success2: Story = {
  args: {
    isOpen: true,
    title: 'Payment Successful',
    description: 'Are you sure you want to deactivate your account? All of your data will be permanently removed.',
    primaryBtnText: 'Continue',
    onClose: fn(),
    type: 'success',
    primaryBtnOnClick: fn(),
    secondaryBtnOnClick: fn()
  },
};

export const CleanDialog: Story = {
  args: {
    isOpen: true,
    onClose: fn(),
    type: 'clean',
    children: <div className=' h-96 bg-red-500'> This is a custom clean dialog to put any of your content</div>

  },
};



const tableData = [
  {
    "date": "2024-10-15T08:16:11.952Z",
    "dueDate": "2024-10-15T08:16:11.952Z",
    "balance": 1000,
    "payment": 0,
    "interest": 0,
    "principal": 0
  },
  {
    "date": "2024-10-22T08:16:11.952Z",
    "dueDate": "2024-10-22T08:16:11.952Z",
    "payment": 1222.22,
    "interest": 1111.11,
    "principal": 111.11,
    "balance": 888.89
  },
  {
    "date": "2024-10-29T08:16:11.952Z",
    "dueDate": "2024-10-29T08:16:11.952Z",
    "payment": 1222.22,
    "interest": 1111.11,
    "principal": 111.11,
    "balance": 777.78
  },
  {
    "date": "2024-11-05T08:16:11.952Z",
    "dueDate": "2024-11-05T08:16:11.952Z",
    "payment": 1222.22,
    "interest": 1111.11,
    "principal": 111.11,
    "balance": 666.67
  },
  {
    "date": "2024-11-12T08:16:11.952Z",
    "dueDate": "2024-11-12T08:16:11.952Z",
    "payment": 1222.22,
    "interest": 1111.11,
    "principal": 111.11,
    "balance": 555.56
  },
  {
    "date": "2024-11-19T08:16:11.952Z",
    "dueDate": "2024-11-19T08:16:11.952Z",
    "payment": 1222.22,
    "interest": 1111.11,
    "principal": 111.11,
    "balance": 444.45
  },
  {
    "date": "2024-11-26T08:16:11.952Z",
    "dueDate": "2024-11-26T08:16:11.952Z",
    "payment": 1222.22,
    "interest": 1111.11,
    "principal": 111.11,
    "balance": 333.34
  },
  {
    "date": "2024-12-03T08:16:11.952Z",
    "dueDate": "2024-12-03T08:16:11.952Z",
    "payment": 1222.22,
    "interest": 1111.11,
    "principal": 111.11,
    "balance": 222.23
  },
  {
    "date": "2024-12-10T08:16:11.952Z",
    "dueDate": "2024-12-10T08:16:11.952Z",
    "payment": 1222.22,
    "interest": 1111.11,
    "principal": 111.11,
    "balance": 111.12
  },
  {
    "date": "2024-12-17T08:16:11.952Z",
    "dueDate": "2024-12-17T08:16:11.952Z",
    "payment": 1222.22,
    "interest": 1111.11,
    "principal": 111.11,
    "balance": 0
  }
]

const tableRowData = tableData.map((item) => ({
  items: [{
    value: item.dueDate,
  }, {
    value: item.payment
  }, {
    value: item.principal
  }, {
    value: item.interest
  }, {
    value: item.balance
  }]
}
))

export const ExampleTableInDialog: Story = {
  args: {
    isOpen: true,
    onClose: fn(),
    type: 'clean',
    children: <Table
      spacing='tight'
      overflowX={false}
      showCardContainer={false}
      columnTitles={[{
        name: 'Due Date',
      }, {
        name: 'Repayment'
      }, {
        name: 'Principal',
      }, {
        name: 'Interest',
      }, {
        name: 'Balance'
      }]}
      rowData={tableRowData}
    />

  },
};