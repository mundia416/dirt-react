import React from 'react'

type Props = {
    value: boolean,
    onToggle: (value: boolean) => void
    disabled?: boolean
}

export default function Checkbox({
    value,
    onToggle,
    disabled
}: Props) {
    return (
        <input
        disabled={disabled}
            type="checkbox"
            checked={value}
            onChange={e => onToggle(e.target.checked)}
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
        />
    )
}