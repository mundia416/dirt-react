import React, { useEffect, useState } from 'react'
import currencies from './currencies'
import Select from '../select'
import CurrencyType from './CurrencyType'
import currencyUtils from '../../utils/currency-utils'
import { Controller, Control, FieldValues } from "react-hook-form";



type Props = {
    label?: string
    value?: CurrencyType
    onChange?: (currency: CurrencyType) => void
    formProps?: {
        //control from react hook forms useForm()
        control: Control<FieldValues, any>
        name: string
    }
}

export default function CurrencySelect(props: Props) {
    if (props.formProps) {
        return <Controller
            name={props.formProps.name}
            control={props.formProps.control}
            render={({ field }) => (
                <CurrencySelectContent
                    {...props}
                    value={field.value}
                    onChange={field.onChange}
                />
            )}
        />
    } else {
        return <CurrencySelectContent {...props} />
    }
}


function CurrencySelectContent({
    label,
    value,
    onChange
}: Props) {

    const [currencyOptions, setCurrencyOptions] = useState(currencyUtils.getCurrencies())

    useEffect(() => {
        if (!value && currencyOptions) {
            onChange && onChange(currencyUtils.getInitialCurrency())
        }
    }, [currencyOptions])


    const handleSearchCurrency = (text: string) => {
        const filteredCurrencies = currencies.filter(option => {
            let matches

            matches = option.name.toLowerCase().includes(text.toLowerCase())

            if (!matches) {
                matches = option.code.toLowerCase().includes(text.toLowerCase())
            }

            if (!matches) {
                matches = option.symbol.toLowerCase().includes(text.toLowerCase())
            }

            return matches
        })

        setCurrencyOptions(currencyUtils.processCurrencies(filteredCurrencies))
    }

    const handleSelect = (id: string) => {
        for (let item of currencies) {
            if (item.code === id) {
                onChange && onChange({
                    ...item,
                    code: item.code
                })

                return
            }
        }
    }

    return (
        <Select
            label={label}
            value={value ? {
                id: value.code,
                title: value.name,
                secondaryText: value.code
            } : undefined}
            options={currencyOptions}
            onChange={option => handleSelect(option.id)}
            searchPlaceholder='Search Currency...'
            onSearchChange={handleSearchCurrency} />
    )
}



