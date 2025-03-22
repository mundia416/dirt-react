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
    value: string | React.ReactNode
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
    showActionButtonOnMobile?: boolean
    wordWrap?: 'wrap' | 'truncate'
    className?: string
}

export default function Stat(props: Props) {
    const { showActionButtonOnMobile = true } = props

    return (
        <>
            <Tooltip id={tooltipId} className='z-50 max-w-[90vw]' />

            <div
                className={' rounded-lg bg-white shadow flex  flex-col ' + props.className}
            >
                <div>
                    <div
                        className="relative overflow-hidden  px-4  py-5  sm:px-6 sm:py-6"
                    >
                        <div className='flex flex-col sm:block'>
                            <div className='flex'>
                                <div className={`sm:absolute rounded-md ${props.iconBackgroundColor || 'bg-indigo-500'} p-3`}>
                                    <props.icon aria-hidden="true" className="h-6 w-6 text-white " />
                                </div>
                            </div>
                            <div className='flex justify-between '>
                                <p className={`sm:ml-16 mt-3 sm:mt-0 text-sm font-medium text-gray-500 ${props.wordWrap !== 'wrap' && 'truncate'}`}>{props.name}</p>

                                {props.tooltip &&
                                    <div className='pl-2 absolute top-0 pt-5 pr-4 right-0'>
                                        <InformationCircleIcon
                                            data-tooltip-id={tooltipId}
                                            data-tooltip-content={props.tooltip}
                                            className='h-5 w-5 text-gray-500'
                                        />

                                    </div>
                                }

                            </div>
                        </div>

                        <div className="sm:ml-16 flex items-baseline   relative">
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
                </div>
                {props.actionButtonOnClick &&
                    <div className={`relative flex flex-grow items-end rounded-b-lg shadow ${!showActionButtonOnMobile ? 'hidden md:block' : 'block'}`}>

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
