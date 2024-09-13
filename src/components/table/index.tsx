import React, { ReactNode } from 'react'
import Card from '../card'

type RowColumnItemProps = {
    value: string | number | ReactNode
    // whether to show the text as bold
    bold?: boolean
}


export type RowsProps = {
    items: RowColumnItemProps[]
}

type Props = {
    heading?: string
    subHeading?: string
    actionButton?: {
        text: string,
        onClick: () => void
    },
    columnTitles: {
        name: string
    }[],
    rowData: RowsProps[]
}

export default function Table({
    heading,
    subHeading,
    actionButton,
    columnTitles,
    rowData = []
}: Props) {

    return (
        <div className="">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-base font-semibold leading-6 text-gray-900">{heading}</h1>
                    <p className="mt-2 text-sm text-gray-700">
                        {subHeading}
                    </p>
                </div>

                {actionButton &&
                    <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                        <button
                            onClick={actionButton.onClick}
                            type="button"
                            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            {actionButton.text}
                        </button>
                    </div>
                }
            </div>

            <div className="mt-8 flow-root">
                <Card
                className='p-4'>

                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead>
                                    <tr>
                                        {columnTitles.map((item, index) =>
                                            <th key={index} scope="col" className={`${index === 0 ? 'pl-4 pr-3 sm:pl-0' : 'px-3'} py-3.5  text-left text-sm font-semibold text-gray-900 `}>
                                                {item.name}
                                            </th>
                                        )}
                                    </tr>
                                </thead>

                                <tbody className="divide-y divide-gray-200">
                                    {rowData.map((row, index) => (

                                        <tr key={index}>
                                            {row.items.map((item, itemIndex) => (
                                                <td key={itemIndex} className={`whitespace-nowrap ${itemIndex === 0 ? 'py-4 pl-4 pr-3 sm:pl-0' : 'px-3 py-4'} text-sm ${item.bold ? 'font-medium text-gray-900' : 'text-gray-500'}`}>{item.value}</td>
                                                // <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                                                //     <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                                //         Edit<span className="sr-only">, {person.name}</span>
                                                //     </a>
                                                // </td>
                                            ))}
                                        </tr>
                                    ))}

                                </tbody>
                            </table>
                        </div>
                    </div>
                </Card>
            </div>

        </div>

    )
}