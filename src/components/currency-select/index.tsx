import React, { useState } from 'react'
import currencies from './currencies'
import Select, { Option } from '../select'



export type CurrencyProps = {
    code: string
    symbol: string
    name: string
}

export function getInitialCurrency(): CurrencyProps {
    const currency = { "cc": "ZAR", "symbol": "R", "name": "South African rand" }


    return {
        code: currency.cc,
        name: currency.name,
        symbol: currency.symbol,
    }

}

function getCurrencies(): Option[] {
    return processCurrencies(currencies)
}

function processCurrencies(currencies: any): Option[] {
    const processedCurrencies = currencies.map(({ cc, name }: any) => (
        {
            id: cc,
            title: name,
            secondaryText: cc,
        }
    ))

    return processedCurrencies
}

type Props = {
    label?: string
    defaultValue?: CurrencyProps
    onChange: (currency: CurrencyProps) => void
}


function CurrencySelect({
    label,
    defaultValue = getInitialCurrency(),
    onChange
}: Props) {

    const [currencyOptions, setCurrencyOptions] = useState(getCurrencies())


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

        setCurrencyOptions(processCurrencies(filteredCurrencies))
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

