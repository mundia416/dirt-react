function debounce<T extends (...args: any[]) => void>(func: T, delay: number): (...args: Parameters<T>) => void {
    let timeoutId: ReturnType<typeof setTimeout>;

    return function (...args: Parameters<T>) {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }

        timeoutId = setTimeout(() => {
            func(...args);
        }, delay);
    };
}

function formatNumberWithCommas(value: string | number): string {
    if (value === null || value === undefined || value === '') return '';
    const strValue = value.toString().replace(/,/g, '');
    if (!/^\d*\.?\d*$/.test(strValue)) return strValue;
    if (strValue === '.' || strValue === '') return strValue;
    const [integerPart, decimalPart] = strValue.split('.');
    const formattedInt = integerPart ? Number(integerPart).toLocaleString('en-US') : '0';
    return typeof decimalPart !== 'undefined'
        ? `${formattedInt}.${decimalPart}`
        : formattedInt;
}

function unformatNumber(value: string | number): string {
    if (value === null || value === undefined) return '';
    return value.toString().replace(/,/g, '');
}

export default {
    debounce,
    formatNumberWithCommas,
    unformatNumber
}