import React from 'react'


export type RowProps = {
    left: React.ReactNode | string,
    right: React.ReactNode | string
}
type Props = {
    data: RowProps[]
}

export default function DescriptionList({ data }: Props) {
    return (
        <div className=" border-gray-100">
            <dl className="divide-y divide-gray-100">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">

                        {typeof item.left === 'string' ? <dt className="text-sm font-medium leading-6 text-gray-900">{item.left}</dt> : item.left}

                        <div className='sm:col-span-2'>
                        {typeof item.right === 'string' ? < dd className="mt-1 text-sm leading-6 text-gray-700  sm:mt-0">{item.right}</dd> : item.right}
                        </div>

                    </div>
                ))
                }
            </dl >
        </div >

    )
}