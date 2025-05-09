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


const borrowers = [
  { id: 'a', email: null, name: 'John Do', nrc: null, phone: null, activeLoansDue: 0, activeLoansPaid: 0 },
  { id: 'b', email: null, name: 'John Do', nrc: '416896sgsdfgsfd2/10/01', phone: '0974179979', activeLoansDue: 0, activeLoansPaid: 200 },
  { id: 'c', email: 'dev.johndomathastewardecljjohndomathastewardeclj@gmail.com', name: 'John Martha Muleleko Joe', nrc: null, phone: null, activeLoansDue: 23000, activeLoansPaid: 0 },
  { id: 'd', email: null, name: 'John Do', nrc: null, phone: null, activeLoansDue: 0, activeLoansPaid: 40000 },

]

const borrowerColumnTitles = [{
  name: 'Email'
}, {
  name: 'Name'
}, {
  name: 'ID'
}, {
  name: 'Phone'
}, {
  name: 'Active Loans Due'
}, {
  name: 'Active Loans Paid'
},
]

const borrowerRowData: RowsProps[] = borrowers.map(borrower => {
  return {
    items: [{
      value: borrower.email || '--',
      className: 'break-words max-w-44 text-gray-900'
    },
    {
      value: borrower.name || '--',
    }, {
      value: borrower.nrc || '--',
    }, {
      value: borrower.phone || '--',
    }, {
      value: borrower.activeLoansDue || '--',
    }, {
      value: borrower.activeLoansPaid || '--',
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


const rowData: RowsProps[] = people.map(person => {
  return {
    items: [{
      value: person.name,
      className: 'text-gray-900 font-semibold'
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



export const TightSpacing: Story = {
  args: {
    columnTitles,
    rowData,
    spacing: 'tight'
  },
};
export const CustomDatacellClassName: Story = {
  args: {
    heading: 'Users',
    subHeading: 'A list of all the users in your account including their name, title, email and role.',
    actionButton: {
      text: 'Add Users',
      onClick: fn()
    },
    columnTitles: borrowerColumnTitles,
    rowData: borrowerRowData,
  },
};


export const ClickableRow: Story = {
  args: {
    heading: 'Users',
    subHeading: 'A list of all the users in your account including their name, title, email and role.',
    actionButton: {
      text: 'Add Users',
      onClick: fn()
    },
    columnTitles,
    rowData,
    onRowClick: fn()
  },
};

export const Pagination: Story = {
  args: {
    heading: 'Users',
    subHeading: 'A list of all the users in your account including their name, title, email and role.',
    actionButton: {
      text: 'Add Users',
      onClick: fn()
    },
    columnTitles,
    rowData,
    onRowClick: fn(),
    pagination: {
      onPageClick: fn(),
      page: 10,
      total: 402,
      perPage: 25
    }
  },
};

export const PaginationLoading: Story = {
  args: {
    heading: 'Users',
    subHeading: 'A list of all the users in your account including their name, title, email and role.',
    actionButton: {
      text: 'Add Users',
      onClick: fn()
    },
    columnTitles,
    rowData,
    onRowClick: fn(),
    pagination: {
      onPageClick: fn(),
      page: 10,
      total: 402,
      perPage: 25,
      loading: true,
      loadingProps: {
        variant: 'three-dots',
        color: '#4f46e5'
      }
    }
  },
};


export const WithoutCard: Story = {
  args: {
    columnTitles,
    rowData,
    showCardContainer: false
  },
};

// Example hoverView for demonstration
const hoverExample = (
  <div style={{ minWidth: 180, minHeight: 60, color: '#333', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
    <strong>Hovered Row Details</strong>
    <span>This is extra info shown on hover!</span>
  </div>
);

const rowDataWithHover: RowsProps[] = people.map((person, idx) => {
  return {
    items: [
      {
        value: person.name,
        className: 'text-gray-900 font-semibold'
      },
      {
        value: person.title,
      },
      {
        value: person.email,
      },
      {
        value: person.role,
      },
      {
        value: <div>
          <Button
            size='extra-small'
            className='text-indigo-500'
            variant='text'
          >Edit</Button>
        </div>
      }
    ],
    hoverView: (
      <div style={{ minWidth: 180, minHeight: 60, color: '#333', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <strong>{person.name}</strong>
        <span>This is a custom hover view for row {idx + 1}!</span>
        <span style={{ fontSize: 12, color: '#666' }}>{person.email}</span>
      </div>
    )
  }
});

export const WithHoverView: Story = {
  args: {
    heading: 'Users',
    subHeading: 'Hover over the first row to see a custom hover view.',
    columnTitles,
    rowData: rowDataWithHover
  },
};





