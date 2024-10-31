import React from 'react'

type Props = {
    children: number | string
    color?: 'gray' | 'red' | 'yellow' | 'green' | 'blue' | 'indigo' | 'purple' | 'pink'
    variant?: 'normal' | 'dot' | 'pill' | 'pill-dot' | 'flat' | 'flat-pill' | 'flat-dot' | 'flat-pill-dot'
    onCancel?: () => void
}


const CancelButton = (params: { onCancel?: () => void }) => {
    return (
        params.onCancel ?
            <button
                onClick={params.onCancel}
                type="button" className="group relative -mr-1 h-3.5 w-3.5 rounded-sm hover:bg-gray-500/20">
                <span className="sr-only">Remove</span>
                <svg viewBox="0 0 14 14" className="h-3.5 w-3.5 stroke-gray-600/50 group-hover:stroke-gray-600/75">
                    <path d="M4 4l6 6m0-6l-6 6" />
                </svg>
                <span className="absolute -inset-1" />
            </button>
            :
            <div />
    )
}

export default function Badge({
    children,
    color = 'gray',
    onCancel,
    variant = 'normal'
}: Props) {
    return (
        <>
            {variant === 'normal' &&
                <span className={`inline-flex items-center rounded-md bg-${color}-50 px-2 py-1 text-xs font-medium text-${color}-600 ring-1 ring-inset ring-${color}-500/10`}>
                    {children}

                    <CancelButton onCancel={onCancel} />
                </span>
            }

            {variant === 'dot' &&
                <span className="inline-flex items-center gap-x-1.5 rounded-md px-2 py-1 text-xs font-medium text-gray-900 ring-1 ring-inset ring-gray-200">
                    <svg viewBox="0 0 6 6" aria-hidden="true" className={`h-1.5 w-1.5 fill-${color}-500`}>
                        <circle r={3} cx={3} cy={3} />
                    </svg>
                    {children}

                    <CancelButton onCancel={onCancel} />

                </span>
            }

            {variant === 'pill' &&
                <span className={`inline-flex items-center rounded-full bg-${color}-50 px-2 py-1 text-xs font-medium text-${color}-700 ring-1 ring-inset ring-${color}-600/10`}>
                    {children}

                    <CancelButton onCancel={onCancel} />

                </span>

            }

            {variant === 'pill-dot' &&
                <span className="inline-flex items-center gap-x-1.5 rounded-full px-2 py-1 text-xs font-medium text-gray-900 ring-1 ring-inset ring-gray-200">
                    <svg viewBox="0 0 6 6" aria-hidden="true" className={`h-1.5 w-1.5 fill-${color}-500`}>
                        <circle r={3} cx={3} cy={3} />
                    </svg>
                    {children}

                    <CancelButton onCancel={onCancel} />

                </span>
            }

            {variant === 'flat' &&
                <span className={`inline-flex items-center rounded-md bg-${color}-100 px-2 py-1 text-xs font-medium text-${color}-700`}>
                    {children}

                    <CancelButton onCancel={onCancel} />

                </span>
            }

            {variant === 'flat-pill' &&
                <span className={`inline-flex items-center rounded-full bg-${color}-100 px-2 py-1 text-xs font-medium text-${color}-800`}>
                    {children}

                    <CancelButton onCancel={onCancel} />

                </span>
            }

            {variant === 'flat-dot' &&
                <span className={`inline-flex items-center gap-x-1.5 rounded-md bg-${color}-100 px-2 py-1 text-xs font-medium text-${color}-800`}>
                    <svg viewBox="0 0 6 6" aria-hidden="true" className={`h-1.5 w-1.5 fill-${color}-500`}>
                        <circle r={3} cx={3} cy={3} />
                    </svg>
                    {children}

                    <CancelButton onCancel={onCancel} />

                </span>
            }

            {variant === 'flat-pill-dot' &&
                <span className={`inline-flex items-center gap-x-1.5 rounded-full bg-${color}-100 px-2 py-1 text-xs font-medium text-${color}-700`}>
                    <svg viewBox="0 0 6 6" aria-hidden="true" className={`h-1.5 w-1.5 fill-${color}-500`}>
                        <circle r={3} cx={3} cy={3} />
                    </svg>
                    {children}

                    <CancelButton onCancel={onCancel} />

                </span>
            }
        </>
    )
}