import React, { ReactNode } from 'react'
import Card from '../card'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import Loading, { LoadingProps } from '../loading'

type RowColumnItemProps = {
    value: string | number | ReactNode
    // whether to show the text as bold
    className?: string
}


export type RowsProps = {
    items: RowColumnItemProps[]
}

export type ColumnTitleProps = {
    name: string
    className?: string
}


type Props = {
    heading?: string
    subHeading?: string
    actionButton?: {
        text: string,
        onClick: () => void
    },
    spacing?: 'normal' | 'tight'
    /**
     * whether to overflow in the x axis with a scrollbar or not
     * useful for situations where this table needs to be nested in a container that has x axis scroll (overflow-auto)
     */
    overflowX?: boolean
    showCardContainer?: boolean
    columnTitles: ColumnTitleProps[],
    rowData: RowsProps[]
    /**allows for a row to be clicked and hovered over */
    onRowClick?: (index: number) => void,
    pagination?: {
        //the total pages
        total: number
        //the current page
        page: number
        //the number of items per page
        perPage: number
        onPageClick: (page: number) => void
        loading?: boolean
        loadingProps?: {
            fullScreen?: boolean
            className?: string
            color?: string
            variant?: LoadingProps['variant']
            size?: LoadingProps['size']
        }
    }
}


const Container = (props: {
    showCardContainer: boolean,
    children: React.ReactNode
}) => {
    return (
        <>
            {props.showCardContainer ?

                <div className="mt-8 flow-root">
                    <Card
                        className='p-4 overflow-hidden'>
                        {props.children}
                    </Card>
                </div>
                :
                props.children}
        </>
    )
}

export default function Table({
    heading,
    subHeading,
    actionButton,
    columnTitles,
    rowData = [],
    onRowClick,
    pagination,
    overflowX = true,
    showCardContainer = true,
    spacing = 'normal'
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

            <Container
                showCardContainer={showCardContainer}>

                <div className={`-mx-4 -my-2 ${overflowX && 'overflow-x-auto'} sm:-mx-6 lg:-mx-8`}>
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        {pagination?.loading ?
                            <Loading
                                {...pagination.loadingProps}
                                className={pagination.loadingProps?.className || 'w-full min-h-40'}
                            />
                            :
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead>
                                    <tr>
                                        {columnTitles.map((item, index) =>
                                            <th key={index} scope="col" className={`${spacing === 'tight' ? (index === 0 ? 'pr-1 pl-2' : 'px-1') : (index === 0 ? 'pl-4 pr-3 sm:pl-0' : 'md:px-3')} py-3.5  text-left text-xs md:text-sm font-semibold text-gray-900 ${item.className}`}>
                                                {item.name}
                                            </th>
                                        )}
                                    </tr>
                                </thead>


                                <tbody className="divide-y divide-gray-200">
                                    {rowData.map((row, index) => (

                                        <tr
                                            onClick={() => onRowClick && onRowClick(index)}
                                            className={`${onRowClick && 'cursor-pointer hover:bg-indigo-50'}`}
                                            key={index}>
                                            {row.items.map((item, itemIndex) => (
                                                <td key={itemIndex} className={`${item.className ? item.className : 'whitespace-nowrap text-gray-500'}  ${spacing === 'tight' ? (itemIndex === 0 ? 'pr-1 pl-2 py-2' : 'px-1 py-2') : (itemIndex === 0 ? 'py-4 pl-4 pr-3 sm:pl-0' : 'px-1 md:px-3 py-4')} text-xs md:text-sm`}>{item.value}</td>
                                            ))}
                                        </tr>
                                    ))}

                                </tbody>
                            </table>
                        }
                    </div>
                </div>



                {/* pagination*/}
                {pagination && (
                    <div className="w-full  flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 ">
                        <div className="w-full flex flex-1 justify-between sm:hidden">
                            <a
                                onClick={() => pagination.page > 1 && pagination.onPageClick(pagination.page - 1)}
                                className={`cursor-pointer relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 ${pagination.page === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                            >
                                Previous
                            </a>
                            <a
                                onClick={() => pagination.page < Math.ceil(pagination.total / pagination.perPage) && pagination.onPageClick(pagination.page + 1)}
                                className={`cursor-pointer relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 ${pagination.page === Math.ceil(pagination.total / pagination.perPage) ? 'opacity-50 cursor-not-allowed' : ''}`}
                            >
                                Next
                            </a>
                        </div>
                        <div className="  w-full hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                            <div>
                                <p className="text-sm text-gray-700">
                                    Showing{' '}
                                    <span className="font-medium">
                                        {Math.min((pagination.page - 1) * pagination.perPage + 1, pagination.total)}
                                    </span>{' '}
                                    to{' '}
                                    <span className="font-medium">
                                        {Math.min(pagination.page * pagination.perPage, pagination.total)}
                                    </span>{' '}
                                    of <span className="font-medium">{pagination.total}</span> results
                                </p>
                            </div>
                            <div className=''>
                                <nav aria-label="Pagination" className="justify-end  isolate inline-flex -space-x-px rounded-md shadow-sm">
                                    <a
                                        onClick={() => pagination.page > 1 && pagination.onPageClick(pagination.page - 1)}
                                        className={` cursor-pointer relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 ${pagination.page === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                                    >
                                        <span className="sr-only">Previous</span>
                                        <ChevronLeftIcon aria-hidden="true" className="h-5 w-5" />
                                    </a>

                                    {
                                        (() => {
                                            const totalPages = Math.ceil(pagination.total / pagination.perPage);
                                            const currentPage = pagination.page;
                                            const pageNumbers = [];

                                            // Show the first 5 pages, the last 3 pages, and the current page
                                            const firstPages = Math.min(2, totalPages); // Ensure to not exceed total pages
                                            const lastPages = Math.max(totalPages - 1, firstPages + 1); // Ensure at least 3 pages in total

                                            for (let i = 1; i <= totalPages; i++) {
                                                if (
                                                    i <= firstPages || // First  pages
                                                    i >= lastPages ||  // Last pages
                                                    (i >= currentPage - 1 && i <= currentPage + 1) // Current page and neighbors
                                                ) {
                                                    pageNumbers.push(
                                                        <a
                                                            key={i}
                                                            onClick={() => pagination.onPageClick(i)}
                                                            className={`cursor-pointer relative inline-flex items-center px-4 py-2 text-sm font-semibold ${pagination.page === i
                                                                ? 'bg-indigo-600 text-white'
                                                                : 'text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
                                                                } focus:z-20 focus:outline-offset-0`}
                                                        >
                                                            {i}
                                                        </a>
                                                    );
                                                } else if (
                                                    i === firstPages + 1 || // After first 5 pages
                                                    i === lastPages - 1      // Before last 5 pages
                                                ) {
                                                    pageNumbers.push(
                                                        <span
                                                            key={`ellipsis-${i}`}
                                                            className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300"
                                                        >
                                                            ...
                                                        </span>
                                                    );
                                                }
                                            }

                                            return pageNumbers;
                                        })()
                                    }


                                    <a
                                        onClick={() => pagination.page < Math.ceil(pagination.total / pagination.perPage) && pagination.onPageClick(pagination.page + 1)}
                                        className={`cursor-pointer relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 ${pagination.page === Math.ceil(pagination.total / pagination.perPage) ? 'opacity-50 cursor-not-allowed' : ''}`}
                                    >
                                        <span className="sr-only">Next</span>
                                        <ChevronRightIcon aria-hidden="true" className="h-5 w-5" />
                                    </a>
                                </nav>
                            </div>
                        </div>
                    </div>
                )}

            </Container>
        </div>
    )
}