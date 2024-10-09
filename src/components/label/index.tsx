import React from 'react'

type Props = {
    children: React.ReactNode
}

export default function Label({ children }: Props) {
    return (
        <label
            className={`flex flex-col text-gray-700 text-sm leading-6 font-semibold`}
        >{children}
        </label>
    )
}