import React from 'react'
import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/20/solid'


function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

type Props = {
    name: string
    value: string
    //an icon from heroicons, i.e UsersIcon
    icon: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
        title?: string;
        titleId?: string;
    } & React.RefAttributes<SVGSVGElement>>
    // a tailwind background color. i.e bg-indigo-500
    iconBackgroundColor?: string
    change?: {
        value: string,
        type: 'increase' | 'decrease'
    },

    actionButtonOnClick?: () => void
    actionButtonText?: string

}

export default function Stat(props: Props) {
    return (
        <div>
            <div
                className='rounded-lg bg-white shadow '
            >
                <div
                    className="relative overflow-hidden  px-4  py-5  sm:px-6 sm:py-6"
                >
                    <div>
                        <div className={`absolute rounded-md ${props.iconBackgroundColor || 'bg-indigo-500'} p-3`}>
                            <props.icon aria-hidden="true" className="h-6 w-6 text-white" />
                        </div>
                        <p className="ml-16 truncate text-sm font-medium text-gray-500">{props.name}</p>
                    </div>

                    <div className="ml-16 flex items-baseline   relative">
                        <p className="text-2xl font-semibold text-gray-900">{props.value}</p>
                        {props.change && <>
                            <p
                                className={classNames(
                                    props.change.type === 'increase' ? 'text-green-600' : 'text-red-600',
                                    'ml-2 flex items-baseline text-sm font-semibold',
                                )}
                            >
                                {props.change.type === 'increase' ? (
                                    <ArrowUpIcon aria-hidden="true" className="h-5 w-5 flex-shrink-0 self-center text-green-500" />
                                ) : (
                                    <ArrowDownIcon aria-hidden="true" className="h-5 w-5 flex-shrink-0 self-center text-red-500" />
                                )}

                                <span className="sr-only"> {props.change.type === 'increase' ? 'Increased' : 'Decreased'} by </span>
                                {props.change.value}
                            </p>
                        </>
                        }
                    </div>

                </div>
                {props.actionButtonOnClick &&
                    <div className="inset-x-0 bottom-0 bg-gray-50 px-4 py-4 sm:px-6">
                        <div className="text-sm">
                            <a onClick={props.actionButtonOnClick} className="cursor-pointer font-medium text-indigo-600 hover:text-indigo-500">
                                {props.actionButtonText || 'View all'}
                            </a>
                        </div>
                    </div>
                }
            </div>

        </div>
    )
}
