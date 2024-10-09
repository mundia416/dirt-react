import currencies from "../../components/currency-select/currencies"
import CurrencyType from "../../components/currency-select/CurrencyType"
import { Option } from "../../components/select"

function getInitialCurrency(): CurrencyType {
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

function processCurrencies(currencies: { cc: string, symbol: string, name: string }[]): Option[] {
    const processedCurrencies = currencies.map(({ cc, name }: any) => (
        {
            id: cc,
            title: name,
            secondaryText: cc,
        }
    ))

    return processedCurrencies
}

export default {
    getInitialCurrency,
    getCurrencies,
    processCurrencies
}