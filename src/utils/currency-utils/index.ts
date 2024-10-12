import currencies from "../../components/currency-select/currencies"
import CurrencyType from "../../components/currency-select/CurrencyType"
import { Option } from "../../components/select"

function getInitialCurrency(): CurrencyType {
    const currency = { "code": "ZAR", "symbol": "R", "name": "South African rand" }


    return {
        code: currency.code,
        name: currency.name,
        symbol: currency.symbol,
    }

}

function getCurrencies(): Option[] {
    return processCurrencies(currencies)
}

function processCurrencies(currencies: { code: string, symbol: string, name: string }[]): Option[] {
    const processedCurrencies = currencies.map(({ code, name }: any) => (
        {
            id: code,
            title: name,
            secondaryText: code,
        }
    ))

    return processedCurrencies
}

export default {
    getInitialCurrency,
    getCurrencies,
    processCurrencies
}