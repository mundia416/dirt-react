import React from 'react'
import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/20/solid'
import { InformationCircleIcon } from '@heroicons/react/24/outline'
import { Tooltip } from 'react-tooltip'
import stringUtils from '../../utils/string-utils'


const tooltipId = stringUtils.generateRandomString(8)

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
    tooltip?: string
    actionButtonOnClick?: () => void
    actionButtonText?: string
    wordWrap?: 'wrap' | 'truncate'
    className?: string
}

export default function Stat(props: Props) {
    return (
        <>
            <Tooltip id={tooltipId} className='z-50' />

            <div
                className={'relative rounded-lg bg-white shadow ' + props.className}
            >
                <div
                    className="relative overflow-hidden  px-4  py-5  sm:px-6 sm:py-6"
                >
                    <div>
                        <div className={`absolute rounded-md ${props.iconBackgroundColor || 'bg-indigo-500'} p-3`}>
                            <props.icon aria-hidden="true" className="h-6 w-6 text-white" />
                        </div>
                        <div className='flex justify-between '>
                            <p className={`ml-16  text-sm font-medium text-gray-500 ${props.wordWrap !== 'wrap' && 'truncate'}`}>{props.name}</p>

                            {props.tooltip &&
                                <div className='pl-2'>
                                    <InformationCircleIcon
                                        data-tooltip-id={tooltipId}
                                        data-tooltip-content={props.tooltip}
                                        className='h-5 w-5 text-gray-500'
                                    />

                                </div>
                            }

                        </div>
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
                    <div className='relative flex items-end h-full bg-white rounded-b-lg shadow'>

                        <div className="inset-x-0 bottom-0 bg-gray-50 px-4 py-4 sm:px-6 w-full shadow rounded-b-lg">
                            <div className="text-sm">
                                <a onClick={props.actionButtonOnClick} className="cursor-pointer font-medium text-indigo-600 hover:text-indigo-500">
                                    {props.actionButtonText || 'View all'}
                                </a>
                            </div>
                        </div>
                    </div>
                }
            </div>

        </>
    )
}
