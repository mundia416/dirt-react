'use client'
import React, { useCallback, useEffect, useState } from 'react'
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import FieldInput from '../fieldinput'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import Label from '../label'
import { Controller, Control } from "react-hook-form";
import functionUtils from '../../utils/function-utils'
import Loading, { LoadingProps } from '../loading'

export type Option = {
    id: string
    title: string
    secondaryText?: string
}

export type FormProps = {
    //control from react hook forms useForm()
    control: Control<any, any>
    name: string
}

type Props = {
    label?: string
    options: Option[]
    className?: string
    search?: {
        onSearchChange?: (text: string) => void,
        onSearchChangeDebounce?: (text: string) => void,
        debounceDelayMillis?: number
    }
    loading?: boolean
    loadingProps?: {
        fullScreen?: boolean
        className?: string
        color?: string
        variant?: LoadingProps['variant']
        size?: LoadingProps['size']
    }
    searchPlaceholder?: string
    value?: Option
    onChange?: (value: Option) => void
    formProps?: FormProps
    onScrollToBottom?: () => void
}

export default function Select(props: Props) {
    if (props.formProps) {
        return <Controller
            name={props.formProps.name}
            control={props.formProps.control}
            render={({ field }) => (
                <SelectContent
                    {...props}
                    value={field.value}
                    onChange={field.onChange}
                />
            )}
        />
    } else {
        return <SelectContent {...props} />
    }
}


export function SelectContent(props: Props) {

    const [options, setOptions] = useState(props.options)


    const debouncedScrollToBottom = useCallback(
        functionUtils.debounce(() => {
            props.onScrollToBottom && props.onScrollToBottom(); // Trigger pagination
        }, 300), [])


    const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
        const target = event.currentTarget;
        const { scrollTop, scrollHeight, clientHeight } = target;

        // Check if scrolled to the bottom
        if (scrollTop + clientHeight >= scrollHeight) {
            debouncedScrollToBottom()
        }
    }



    useEffect(() => {
        setOptions(props.options)

        //default to first option if value is not defined
        if (!props.value) {
            props.onChange && props.onChange(props.options[0])
        }
    }, [props.options])

    const handleSearchChange = (text: string) => {

        props.search?.onSearchChange && props.search?.onSearchChange(text)

        setOptions(() => {
            if (text.trim() === "") {
                // If the search bar is empty, show all options
                return props.options;
            }

            const lowercasedText = text.toLowerCase().trim();

            return props.options.filter(option =>
                option.title.toLowerCase().includes(lowercasedText) ||
                (option.secondaryText && option.secondaryText.toLowerCase().includes(lowercasedText))
            );
        });

    }
    return (
        <div
            onClick={() => setOptions(props.options)}
        >
            <Listbox
                value={props.value} onChange={props.onChange}>
                <div
                    className='relative'>

                    {props.label &&
                        < div className='w-full flex justify-between mb-2'>
                            <Label>{props.label}</Label>
                        </div>
                    }

                    <div className="relative mt-2">
                        <ListboxButton className={"relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6 " + props.className}>
                            <span className="inline-flex w-full truncate">
                                <span className="truncate">{props.value?.title}</span>
                                <span className="ml-2 truncate text-gray-500">{props.value?.secondaryText}</span>
                            </span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                <ChevronUpDownIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
                            </span>
                        </ListboxButton>

                        <ListboxOptions
                            transition
                            className="absolute z-10 mt-1 max-h-60 w-full  rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
                        >

                            {props.search &&
                                <FieldInput
                                    placeholder={props.searchPlaceholder ? props.searchPlaceholder : 'Search...'}
                                    leadingIcon={MagnifyingGlassIcon}
                                    onChange={handleSearchChange}
                                    debounceDelayMillis={props.search.debounceDelayMillis}
                                    onChangeDebounce={props.search.onSearchChangeDebounce}
                                    inputClassName=' rounded-b-none'
                                />
                            }

                            <div
                                onScroll={handleScroll}
                                className='overflow-auto max-h-44  w-full'>

                                {props.loading ?
                                    <Loading
                                        {...props.loadingProps}
                                        className={props.loadingProps?.className ? props.loadingProps?.className : 'py-4'} />
                                    :
                                    options.map((option, index) => (
                                        <ListboxOption
                                            key={index}
                                            value={option}
                                            className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white"
                                        >
                                            <div className="flex">
                                                <span className="truncate font-normal group-data-[selected]:font-semibold">{option.title}</span>
                                                <span className="ml-2 truncate text-gray-500 group-data-[focus]:text-indigo-200">
                                                    {option.secondaryText}
                                                </span>
                                            </div>

                                            <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden">
                                                <CheckIcon aria-hidden="true" className="h-5 w-5" />
                                            </span>
                                        </ListboxOption>
                                    ))}
                            </div>
                        </ListboxOptions>
                    </div>
                </div>
            </Listbox>
        </div>
    )
}
