import React, { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';
import TextInput from '../textinput';
import styled from 'styled-components';
import Text from '../text';
import Icon from '../icon';
import { Props as TextInputProps } from '../textinput'
import { ExclamationCircleIcon } from '@heroicons/react/24/outline';

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
    leadingClassName?: string,
    leadingIcon?: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & {
        title?: string;
        titleId?: string;
    } & RefAttributes<SVGSVGElement>>,
    trailingIcon?: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & {
        title?: string;
        titleId?: string;
    } & RefAttributes<SVGSVGElement>>,
}

/**
 * 
 *  when adding leading and trailing content, adjust the padding in the x-axis using tailwind to move
 * the input to fit the content you are adding 
 */
const FieldInput = (props: Props) => {

    const { testid, pattern, label, leadingText, trailingContent, className, error,
        helpText, inputClassName, cornerHelpText, placeholder, type, variant, id,
        disabled, onChange, onFilesChange, step, value, element = 'input', name, onFocus, onBlur, aff, max, min, required, leadingClassName,
        formProps } = props

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
                {props.leadingIcon &&
                    <props.leadingIcon className='ml-1 text-gray-500 absolute  h-6 w-6 ' />
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
                    className={` ${leadingText && 'pl-0'} ${props.leadingIcon && 'pl-8'}
                     ${(props.trailingIcon || error) && 'pr-10'} w-full
                      ${error ? 'text-red-900 ' +
                            (!isDarkVariant && ' border-red-300 border-px focus:border-red-300') :
                            (!isDarkVariant && 'focus:border-blue-300')} 
                       ${!isDarkVariant && 'focus:shadow-outline'} ${inputClassName}  `}
                />


                {trailingContent}


                {(props.trailingIcon || error) && (error ? <ExclamationCircleIcon className='text-red-600 h-8 w-8 p-1  absolute right-0' /> : props.trailingIcon && <props.trailingIcon className='text-gray-500 h-8 w-8 p-1  absolute right-0' />)}

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