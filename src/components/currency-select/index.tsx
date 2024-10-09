import React, { useState } from 'react'
import currencies from './currencies'
import Select from '../select'
import CurrencyType from './CurrencyType'
import currencyUtils from '../../utils/currency-utils'









type Props = {
    label?: string
    defaultValue?: CurrencyType
    onChange: (currency: CurrencyType) => void
}


function CurrencySelect({
    label,
    defaultValue = currencyUtils.getInitialCurrency(),
    onChange
}: Props) {

    const [currencyOptions, setCurrencyOptions] = useState(currencyUtils.getCurrencies())


    const handleSearchCurrency = (text: string) => {
        const filteredCurrencies = currencies.filter(option => {
            let matches

            matches = option.name.toLowerCase().includes(text.toLowerCase())

            if (!matches) {
                matches = option.cc.toLowerCase().includes(text.toLowerCase())
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
            if (item.cc === id) {
                onChange({
                    ...item,
                    code: item.cc
                })

                return
            }
        }
    }

    return (
        <Select
            label={label}
            defaultValue={defaultValue ? {
                id: defaultValue.code,
                title: defaultValue.name,
                secondaryText: defaultValue.code
            } : undefined}
            options={currencyOptions}
            onSelect={option => handleSelect(option.id)}
            searchPlaceholder='Search Currency...'
            onSearchChange={handleSearchCurrency} />
    )
}


export default CurrencySelect

