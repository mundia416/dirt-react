import React from 'react'

type Props = {
    value: boolean,
    onToggle: (value: boolean) => void
}

export default function Checkbox({
    value,
    onToggle
}: Props) {
    return (
        <input
            type="checkbox"
            checked={value}
            onChange={e => onToggle(e.target.checked)}
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
        />
    )
}