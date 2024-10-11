import React from 'react'

type Props = {
    children: number | string
    color?: 'gray' | 'red' | 'yellow' | 'green' | 'blue' | 'indigo' | 'purple' | 'pink'
    variant?: 'normal' | 'dot' | 'pill' | 'pill-dot' | 'flat' | 'flat-pill' | 'flat-dot' | 'flat-pill-dot'
}

export default function Badge({
    children,
    color = 'gray',
    variant = 'normal'
}: Props) {
    return (
        <>
            {variant === 'normal' &&
                <span className={`inline-flex items-center rounded-md bg-${color}-50 px-2 py-1 text-xs font-medium text-${color}-600 ring-1 ring-inset ring-${color}-500/10`}>
                    {children}
                </span>
            }

            {variant === 'dot' &&
                <span className="inline-flex items-center gap-x-1.5 rounded-md px-2 py-1 text-xs font-medium text-gray-900 ring-1 ring-inset ring-gray-200">
                    <svg viewBox="0 0 6 6" aria-hidden="true" className={`h-1.5 w-1.5 fill-${color}-500`}>
                        <circle r={3} cx={3} cy={3} />
                    </svg>
                    {children}
                </span>
            }

            {variant === 'pill' &&
                <span className={`inline-flex items-center rounded-full bg-${color}-50 px-2 py-1 text-xs font-medium text-${color}-700 ring-1 ring-inset ring-${color}-600/10`}>
                    {children}
                </span>
            }

            {variant === 'pill-dot' &&
                <span className="inline-flex items-center gap-x-1.5 rounded-full px-2 py-1 text-xs font-medium text-gray-900 ring-1 ring-inset ring-gray-200">
                    <svg viewBox="0 0 6 6" aria-hidden="true" className={`h-1.5 w-1.5 fill-${color}-500`}>
                        <circle r={3} cx={3} cy={3} />
                    </svg>
                    {children}
                </span>
            }

            {variant === 'flat' &&
                <span className={`inline-flex items-center rounded-md bg-${color}-100 px-2 py-1 text-xs font-medium text-${color}-700`}>
                    {children}
                </span>
            }

            {variant === 'flat-pill' &&
                <span className={`inline-flex items-center rounded-full bg-${color}-100 px-2 py-1 text-xs font-medium text-${color}-800`}>
                    {children}
                </span>
            }

            {variant === 'flat-dot' &&
                <span className={`inline-flex items-center gap-x-1.5 rounded-md bg-${color}-100 px-2 py-1 text-xs font-medium text-${color}-800`}>
                    <svg viewBox="0 0 6 6" aria-hidden="true" className={`h-1.5 w-1.5 fill-${color}-500`}>
                        <circle r={3} cx={3} cy={3} />
                    </svg>
                    {children}
                </span>
            }

            {variant === 'flat-pill-dot' &&
                <span className={`inline-flex items-center gap-x-1.5 rounded-full bg-${color}-100 px-2 py-1 text-xs font-medium text-${color}-700`}>
                    <svg viewBox="0 0 6 6" aria-hidden="true" className={`h-1.5 w-1.5 fill-${color}-500`}>
                        <circle r={3} cx={3} cy={3} />
                    </svg>
                    {children}
                </span>
            }
        </>
    )
}