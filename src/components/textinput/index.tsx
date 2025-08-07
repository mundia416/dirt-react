import React, { HTMLAttributes, useCallback } from 'react';
import functionUtils from '../../utils/function-utils';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


export interface Props {
    pattern?: 'yyyy/mm/dd' | 'dd/mm/yyyy' | 'mm/dd/yyyy' | 'dd-mm-yyyy' | 'mm-dd-yyyy' | 'yyyy-mm-dd' | 'dd-mm-yyyy' | 'mm-dd-yyyy' | 'yyyy-mm-dd',
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
    rows?: number,
    inputMode?: HTMLAttributes<HTMLInputElement>['inputMode']
}

// Utility to map pattern to date-fns format
const mapPatternToDateFormat = (pattern?: string) => {
    switch (pattern) {
        case 'yyyy/mm/dd': return 'yyyy/MM/dd';
        case 'dd/mm/yyyy': return 'dd/MM/yyyy';
        case 'mm/dd/yyyy': return 'MM/dd/yyyy';
        case 'dd-mm-yyyy': return 'dd-MM-yyyy';
        case 'mm-dd-yyyy': return 'MM-dd-yyyy';
        case 'yyyy-mm-dd': return 'yyyy-MM-dd';
        default: return 'yyyy-MM-dd';
    }
}

export default function TextInput({
    rows,
    pattern = 'dd/mm/yyyy',
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
    inputMode,
    
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

            onChange && onChange(e.target.value);
            onFilesChange && onFilesChange(e.target.files)
            debounced(e.target.value)
            validate(e, type);
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
                value={value}
                onChange={onChangeAndValidate}
                placeholder={placeholder}
                {...restFormProps}
            />
            :
            type === 'date' ? (
                <DatePicker
                    id={id}
                    name={name}
                    selected={value ? new Date(value) : null}
                    onChange={(date: Date | null) => {
                        const dateValue = date ? date.toISOString().split('T')[0] : '';
                        if (onChange) onChange(dateValue);
                        if (onChangeDebounce) debounced(dateValue);
                        if (rhfOnChange) {
                            // Create a proper synthetic event for react-hook-form
                            const syntheticEvent = {
                                target: {
                                    name: name,
                                    value: dateValue,
                                    type: 'date'
                                },
                                currentTarget: {
                                    name: name,
                                    value: dateValue,
                                    type: 'date'
                                }
                            };
                            rhfOnChange(syntheticEvent);
                        }
                    }}
                    dateFormat={mapPatternToDateFormat(pattern)}
                    className={style}
                    placeholderText={placeholder || pattern}
                    disabled={disabled}
                    required={required}
                    minDate={min ? new Date(min) : undefined}
                    maxDate={max ? new Date(max) : undefined}
                    onBlur={(e) => {
                        onBlur && onBlur();
                        if (rhfOnBlur) {
                            // Create a proper synthetic event for react-hook-form onBlur
                            const syntheticBlurEvent = {
                                target: {
                                    name: name,
                                    value: value || '',
                                    type: 'date'
                                },
                                currentTarget: {
                                    name: name,
                                    value: value || '',
                                    type: 'date'
                                }
                            };
                            rhfOnBlur(syntheticBlurEvent);
                        }
                    }}
                    {...restFormProps}
                />
            ) :
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
                inputMode={inputMode}
                onClick={(e) => e.stopPropagation()}
                pattern={pattern}
                step={step}
                name={name}
                max={max}
                min={min}
                disabled={disabled}
                value={value}
                onChange={onChangeAndValidate}
                className={style}
                type={type}
                onInvalid={(e) => validate(e, type)}
                placeholder={placeholder}
                {...restFormProps}
            />

    )

};


