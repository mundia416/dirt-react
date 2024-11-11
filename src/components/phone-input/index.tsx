import React, { useEffect, useState } from 'react'
import { countryCodes } from './countryCodes'
import Label from '../label'
import Select, { Option } from '../select'


// dial_code is a string
// const sortedCountryCodes = countryCodes.sort((a, b) => a.dial_code.localeCompare(b.dial_code))
const countryCodeOptions = countryCodes.map((country) => {
    return {
        id: country.code,
        title: country.dial_code,
    }
})

type Props = {
    label?: string
    onChange?: (value: string) => void,
    value?: string,
    placeholder?: string,

}

// generate a random id for the input component
const id = Math.random().toString(36).substring(7);

export default function PhoneInput({
    label,
    placeholder,
    value,
    onChange
}: Props) {

    const [countryCode, setCountryCode] = useState<Option>()

    const [defaultValue, setDefaultValue] = useState<string>()


    useEffect(() => {
        if (value) {
            // split by the first 4 characters, if it doesnt find then 3, then 2 then 1
            let countryCode = countryCodes.find(country => value.includes(country.dial_code))
            //hasnt found the country code so we will just use the first 4 characters to find the country code
            const findCountryCode = (length: number) => {
                if (!countryCode) {
                    countryCode = countryCodes.find(country => value.substring(0, length) === country.dial_code.replace('+', ''))

                    if (!countryCode && length > 1) {
                        findCountryCode(length - 1)
                    }
                }
            }

            findCountryCode(4)

            if (countryCode) {
                setCountryCode({
                    id: countryCode.code,
                    title: countryCode.dial_code
                })

                const newValue = value.replace('+', '').replace(countryCode.dial_code.replace('+', ''), '')
                setDefaultValue(newValue)
            } else {
                setDefaultValue(value)
            }
        }
    }, [value])

    const onChangeAndValidate = (e: any) => {
        if (typeof onChange !== 'undefined') {
            onChange && onChange((countryCode?.title || '') + e.target.value);
        }
    }

    const onCountryCodeChange = (option: Option) => {
        setCountryCode(option)
        if (typeof onChange !== 'undefined') {
            onChange && onChange((option.title || '') + (document.getElementById(id) as HTMLInputElement).value);
        }
    }
    return (
        <div>
            <Label>{label}</Label>

            <div className="relative mt-2 rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 flex items-center mb-2">
                    <Select
                        value={countryCode}
                        onChange={onCountryCodeChange}
                        className='min-w-28'
                        search={{
                            onSearchChange: () => { }
                        }}
                        options={countryCodeOptions}
                        alignChevron={'left'}
                        showCheckIcon={false}
                    />
                </div>
                <input
                    id={id}
                    name="phone-number"
                    type="tel"
                    value={defaultValue}
                    onChange={onChangeAndValidate}
                    placeholder={placeholder ? placeholder : '9512345678'}
                    className="block w-full rounded-md border-0 py-1.5 pl-32 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm/6"
                />
            </div>
        </div>
    )
}
