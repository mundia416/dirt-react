import React, { useCallback } from 'react';
import functionUtils from '../../utils/function-utils';


export interface Props {
    pattern?: any,
    type?: React.HTMLInputTypeAttribute | undefined,
    placeholder?: string,
    className?: string,
    padding?: boolean,
    focus?: boolean,
    variant?: 'light' | 'dark',
    element?: 'input' | 'text-area',
    value?: string | number,
    onChange?: (value: string) => void,
    onChangeDebounce?: (value: string) => void
    //the delay for the debounce
    debounceDelayMillis?: number
    onFilesChange?: (files: FileList) => void,
    disabled?: boolean,
    id?: any,
    dir?: any,
    name?: string,
    step?: string,
    onFocus?: () => void,
    onBlur?: () => void,
    max?: number | string,
    min?: number | string,
    intl?: any,
    aff?: any,
    required?: boolean
    formProps?: any
    rows?: number
    formatAmount?: boolean
}

export default function TextInput({
    rows,
    pattern,
    type,
    placeholder,
    className,
    padding = false,
    focus = false,
    variant = 'light',
    element = 'input',
    value,
    onChange,
    onChangeDebounce,
    debounceDelayMillis = 0,
    onFilesChange,
    disabled = false,
    id,
    dir,
    name,
    step,
    onFocus,
    onBlur,
    max,
    min,
    intl,
    aff,
    required,
    formProps = {},
    formatAmount = false
}: Props) {


    const lightVariant = ` ${!focus && 'focus:border-blue-300 focus:shadow-outline bg-white'} 
    border border-gray-300 shadow-sm`

    const darkVariant = `bg-gray-700 text-gray-100 shadow-inner`

    let variantStyle

    switch (variant) {
        case 'light':
            variantStyle = lightVariant
            break
        case 'dark':
            variantStyle = darkVariant
            break
    }

    const style = `leading-6 text-sm ${!padding && 'px-3 py-1'}  rounded 
          outline-none transition duration-150 ${variantStyle} ${className}`

    let valueProps: {
        value?: string | number
    } | null

    // Format value for display if formatAmount is enabled and element is input
    let displayValue = value;
    if (formatAmount && element === 'input') {
        displayValue = functionUtils.formatNumberWithCommas(value ?? '');
    }

    valueProps = {
        value: displayValue
    }

    if (typeof valueProps === 'undefined') { valueProps = null }

    const validate = ({ target }: any, type?: string) => {
        if (type === 'email') {
            if (!target.value.includes("@")) {
                target.setCustomValidity(aff ? intl.formatMessage({ id: "alert.validity.email" }) : "Your email must be valid. Please include @ in your email address!");
            } else if (target.value.includes("@") && target.value.substring(target.value.indexOf("@") + 1).length === 0) {
                target.setCustomValidity(aff ? intl.formatMessage({ id: "alert.validity.email2" }) : "Invalid email address! e.g. example@gmail.com");
            } else {
                target.setCustomValidity("");
            }
        } else {
            target.setCustomValidity("");
        }
    }


    // Define the function that will execute after debounce delay
    const debounced = useCallback(
        functionUtils.debounce((value: string) => {
            onChangeDebounce && onChangeDebounce(value)
        }, debounceDelayMillis),
        []
    );

    // Extract onChange and onBlur from formProps for react-hook-form compatibility
    const { onChange: rhfOnChange, onBlur: rhfOnBlur, ...restFormProps } = formProps || {};

    /**
     * 
     * @param e 
     * @param type 
     */
    const onChangeAndValidate = (e: any, type?: string) => {
        if ((typeof onChange !== 'undefined'
            || typeof onChangeDebounce !== 'undefined'
            || typeof onFilesChange !== 'undefined'
            || typeof rhfOnChange !== 'undefined')) {

            let rawValue = e.target.value;
            if (formatAmount && element === 'input') {
                // Only allow numbers and commas in the input
                rawValue = rawValue.replace(/[^\d,]/g, '');
                // Remove commas for the value passed to onChange/onChangeDebounce
                const numericValue = functionUtils.unformatNumber(rawValue);
                onChange && onChange(numericValue);
                onFilesChange && onFilesChange(e.target.files)
                debounced(numericValue)
                validate(e, 'number'); // Always validate as number
                // Call react-hook-form's onChange with the unformatted value
                if (rhfOnChange) {
                    rhfOnChange({
                        ...e,
                        target: {
                            ...e.target,
                            value: numericValue,
                        },
                    });
                }
                return;
            }
            onChange && onChange(rawValue);
            onFilesChange && onFilesChange(e.target.files)
            debounced(rawValue)
            validate(e, type);
            // Call react-hook-form's onChange with the raw value
            if (rhfOnChange) {
                rhfOnChange(e);
            }
        }
    }

    return (

        element === 'text-area' ?
            <textarea
                required={required}
                id={id}
                dir={dir}
                rows={rows}
                disabled={disabled}
                onClick={(e) => e.stopPropagation()}
                name={name}
                onFocus={onFocus}
                onBlur={(e) => {
                    onBlur && onBlur();
                    rhfOnBlur && rhfOnBlur(e);
                }}
                className={style}
                {...valueProps}
                onChange={onChangeAndValidate}
                placeholder={placeholder}
                {...restFormProps}
            />
            :
            <input
                required={required}
                id={id}
                dir={dir}
                rows={rows}
                onFocus={onFocus}
                onBlur={(e) => {
                    onBlur && onBlur();
                    rhfOnBlur && rhfOnBlur(e);
                }}
                onClick={(e) => e.stopPropagation()}
                pattern={pattern}
                step={step}
                name={name}
                max={max}
                min={min}
                disabled={disabled}
                {...valueProps}
                onChange={onChangeAndValidate}
                className={style}
                type={formatAmount ? 'text' : type}
                inputMode={formatAmount ? 'decimal' : undefined}
                onInvalid={(e) => validate(e, type)}
                placeholder={placeholder}
                {...restFormProps}
            />

    )

};


