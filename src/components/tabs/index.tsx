import React from 'react'
import Select from '../select'

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

export type TabProps = {
    id: string | number
    name: string
}

type Props = {
    tabs: TabProps[]
    activeTabId: string | number
    onTabClick: (id: string | number) => void
}

export default function Tabs(props: Props) {

    const handleOptionSelected = (id: string | number) => {
        props.onTabClick(id)
    }
    return (
        <div>
            <div className="sm:hidden">
                <label htmlFor="tabs" className="sr-only">
                    Select a tab
                </label>

                <Select
                    defaultValue={props.tabs.map(item => ({
                        id: item.id.toString(),
                        title: item.name.toString()
                    })).find((tab) => tab.id.toString() === props.activeTabId.toString())}
                    onSelect={item => handleOptionSelected(item.id)}
                    options={props.tabs.map(item => ({
                        id: item.id.toString(),
                        title: item.name.toString()
                    }))}
                />
            </div>

            <div className="hidden sm:block">
                <div className="border-b border-gray-200">
                    <nav aria-label="Tabs" className="-mb-px flex space-x-8">
                        {props.tabs.map((tab) => (
                            <a
                                key={tab.name}
                                onClick={() => handleOptionSelected(tab.id)}
                                className={classNames(
                                    tab.id.toString() === props.activeTabId.toString()
                                        ? 'border-indigo-500 text-indigo-600'
                                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                                    'cursor-pointer whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium',
                                )}
                            >
                                {tab.name}
                            </a>
                        ))}
                    </nav>
                </div>
            </div>
        </div>
    )
}
