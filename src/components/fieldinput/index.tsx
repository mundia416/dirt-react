import React from 'react';
import TextInput from '../textinput';
import styled from 'styled-components';
import Text from '../text';
import WarningPNG from './images/warning.png'
import Icon from '../icon';
import { Props as TextInputProps } from '../textinput'

const errorFocus = (theme: any) => {

    return `
    border-color: ${theme.red600};

:focus{
    box-shadow: 0 0 0 3px rgba(197, 48, 48, 0.5);;
    outline: 0;

}
`};

const Input = styled(TextInput) <{ error: any }>`
${({ error, theme }) => error && errorFocus(theme)}
`



interface Props extends TextInputProps {
    leadingIcon?: any,
    trailingIcon?: any,
    cornerHelpText?: string,
    inputClassName?: string,
    helpText?: string,
    trailingContent?: any,
    leadingText?: string,
    type?: string,
    pattern?: string,
    label?: string,
    name?: string,
    error?: boolean,
    leadingClassName?: string
}

/**
 * 
 *  when adding leading and trailing content, adjust the padding in the x-axis using tailwind to move
 * the input to fit the content you are adding 
 */
const FieldInput = ({ testid, pattern, label, leadingText, trailingContent, className, error,
    helpText, inputClassName, cornerHelpText, placeholder, type, leadingIcon, trailingIcon, variant, id,
    disabled, onChange, onFilesChange, step, value, element = 'input', name, onFocus, onBlur, aff, max, min, required, leadingClassName,
    formProps }: Props) => {

    const isDarkVariant = (variant === 'dark')

    return (
        <div className={className}>
            {(label || cornerHelpText) &&
                < div className='w-full flex justify-between mb-2'>
                    <label
                        className={`flex flex-col text-gray-700 text-sm leading-6 font-semibold`}
                    >{label}
                    </label>

                    <Text
                        type='text-small'
                    >{cornerHelpText}</Text>
                </div>
            }
            <div className='flex items-center relative'>
                {leadingIcon &&
                    <Icon
                        color
                        hasBackground={false}
                        className='ml-1 text-gray-500 absolute p-3 '
                        src={leadingIcon}
                    />
                }

                <span className={`absolute  z-10 text-gray-600 sm:text-sm sm:leading-5 ${leadingClassName}`}>
                    {leadingText}
                </span>

                <Input
                    formProps={formProps}
                    required={required}
                    testid={testid}
                    disabled={disabled}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    pattern={pattern}
                    aff={aff}
                    onChange={onChange}
                    onFilesChange={onFilesChange}
                    id={id}
                    focus
                    min={min}
                    max={max}
                    name={name}
                    value={value}
                    variant={variant}
                    placeholder={placeholder}
                    type={type}
                    error={error}
                    step={step}
                    element={element}
                    className={` ${leadingText && 'pl-0'} ${leadingIcon && 'pl-12'}
                     ${(trailingIcon || error) && 'pr-10'} w-full
                      ${error ? 'text-red-900 ' +
                            (!isDarkVariant && ' border-red-300 border-px focus:border-red-300') :
                            (!isDarkVariant && 'focus:border-blue-300')} 
                       ${!isDarkVariant && 'focus:shadow-outline'} ${inputClassName}  `}
                />


                {trailingContent}

                {(trailingIcon || error) &&
                    <Icon
                        png
                        color
                        hasBackground={false}
                        className={`p-3 ${error ? 'text-red-600' : 'text-gray-500'} 
                             ml-1 `}
                        src={error ? WarningPNG : trailingIcon}
                    />
                }


            </div>

            {
                helpText &&
                <Text
                    color
                    className={`mt-2 ${error ? 'text-red-600' : 'text-gray-400'} `}
                    type='text-small'>{helpText}</Text>
            }

        </div >
    );
};

FieldInput.defaultProps = {
    error: false,
    element: 'input',
    inputPadding: false,
}

export default FieldInput;