import React from 'react';



export interface Props {
    testid?: string,
    pattern?: any,
    type?: string,
    placeholder?: string,
    className?: string,
    padding?: boolean,
    focus?: boolean,
    variant?: 'light' | 'dark',
    element?: 'input' | 'text-area',
    value?: string | number,
    onChange?: (value: string) => void,
    disabled?: boolean,
    id?: any,
    dir?: any,
    name?: string,
    step?: string,
    onFocus?: () => void,
    onBlur?: () => void,
    max?: number,
    min?: number,
    intl?: any,
    aff?: any,
    required?: boolean
    formProps?: any
}

export default function TextInput({
    testid,
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
    formProps = {}
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

    valueProps = {
        value: value
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

    const onChangeAndValidate = (e: any, type?: string) => {
        onChange && onChange(e.target.value);

        validate(e, type);
    }

    return (

        element === 'text-area' ?
            <textarea
                required={required}
                id={id}
                dir={dir}
                data-testid={testid}
                disabled={disabled}
                onClick={(e) => e.stopPropagation()}
                name={name}
                onFocus={onFocus}
                onBlur={onBlur}
                className={style}
                {...valueProps}
                onChange={(e) => {
                    (typeof onChange !== 'undefined') && onChange(e.target.value)
                }
                }
                placeholder={placeholder}
                {...formProps}
            />
            :
            <input
                required={required}
                id={id}
                dir={dir}
                data-testid={testid}
                onFocus={onFocus}
                onBlur={onBlur}
                onClick={(e) => e.stopPropagation()}
                pattern={pattern}
                step={step}
                name={name}
                max={max}
                min={min}
                disabled={disabled}
                {...valueProps}
                onChange={(e) => {
                    (typeof onChange !== 'undefined') && onChangeAndValidate(e, type)
                    // onChange(e.target.value)
                }
                }
                className={style}
                type={type}
                onInvalid={(e) => validate(e, type)}
                placeholder={placeholder}
                {...formProps}
            />

    )

};


