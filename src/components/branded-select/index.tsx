'use client'
import React, { useEffect } from 'react'
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import { Controller, Control } from "react-hook-form";
import AnimatedDiv from '../animated-div';


export type Option = {
    id: string
    title: string
    description?: string
    descriptionMaxLines?: 1 | 2 | 3 | 4 | 5 | 6
}

type Props = {
    options: Option[]
    onChange?: (value: Option) => void
    value?: Option
    disabled?: boolean
    className?: string
    formProps?: {
        //control from react hook forms useForm()
        control: Control<any, any>
        name: string
    }
    dropdownPosition?: string
}

export default function BrandedSelect(props: Props) {
    if (props.formProps) {
        return <Controller
            name={props.formProps.name}
            control={props.formProps.control}
            render={({ field }) => (
                <BrandedSelectContent
                    {...props}
                    value={field.value}
                    onChange={field.onChange}
                />
            )}
        />
    } else {
        return <BrandedSelectContent {...props} />
    }

}
export function BrandedSelectContent(props: Props) {


    useEffect(() => {
        //default to first option if value is not defined
        if (!props.value) {
            props.onChange && props.onChange(props.options[0])
        }
    }, [props.options])


    return (
        <AnimatedDiv>
            <Listbox
                disabled={props.disabled}
                value={props.value} onChange={props.onChange}>
                <div className={"relative" + props.className}>
                    <div className="inline-flex divide-x divide-indigo-700 rounded-md shadow-sm">
                        <div className="inline-flex items-center gap-x-1.5 rounded-l-md bg-indigo-600 px-3 py-2 text-white shadow-sm">
                            <CheckIcon aria-hidden="true" className="-ml-0.5 h-5 w-5" />
                            <p className="text-sm font-semibold line-clamp-1">{props.value?.title}</p>
                        </div>
                        <ListboxButton className="inline-flex items-center rounded-l-none rounded-r-md bg-indigo-600 p-2 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 focus:ring-offset-gray-50">
                            <ChevronDownIcon aria-hidden="true" className="h-5 w-5 text-white" />
                        </ListboxButton>
                    </div>

                    <ListboxOptions
                        transition
                        className={`${props.dropdownPosition ? props.dropdownPosition : '-right-24 md:left-0 lg:right-0'} absolute z-50 mt-2 w-72 origin-top-right divide-y divide-gray-200 overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in`}
                    >
                        {props.options.map((option) => (
                            <ListboxOption
                                key={option.id}
                                value={option}
                                className="group cursor-default select-none p-4 text-sm text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white"
                            >
                                <div className="flex flex-col">
                                    <div className="flex justify-between">
                                        <p className="font-normal group-data-[selected]:font-semibold">{option.title}</p>
                                        <span className="text-indigo-600 group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden">
                                            <CheckIcon aria-hidden="true" className="h-5 w-5" />
                                        </span>
                                    </div>
                                    {option.description && <p className={`mt-2 text-gray-500 group-data-[focus]:text-indigo-200 ${option.descriptionMaxLines && 'line-clamp-' + option.descriptionMaxLines}`}>{option.description}</p>}
                                </div>
                            </ListboxOption>
                        ))}
                    </ListboxOptions>
                </div>
            </Listbox>
        </AnimatedDiv>

    )
}
