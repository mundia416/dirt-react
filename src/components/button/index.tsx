import Spinner from 'react-spinkit'
import React, { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ButtonProps {
    className?: string,
    size?: 'large' | 'default' | 'small' | 'extra-small',
    variant?: 'primary' | 'secondary' | 'outline' | 'dark' | 'text',
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent> | undefined) => void,
    children?: string,
    color?: boolean,
    hover?: boolean,
    bg?: boolean,
    focus?: boolean,
    padding?: boolean,
    textSize?: boolean,
    rounded?: boolean,
    typeSubmit?: boolean,
    loading?: boolean,
    loadingId?: string,
    enabled?: boolean,
    ref?: any,
    leadingIcon?: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & {
        title?: string;
        titleId?: string;
    } & RefAttributes<SVGSVGElement>>,
    trailingIcon?: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & {
        title?: string;
        titleId?: string;
    } & RefAttributes<SVGSVGElement>>,
}



const Button: React.FC<ButtonProps> = (props) => {

    const {
        className,
        ref,
        size = "default",
        variant = 'primary',
        onClick,
        children,
        color = false,
        hover = false,
        bg = false,
        focus = false,
        padding = false,
        textSize = false,
        rounded = false,
        typeSubmit = false,
        loading = false,
        loadingId = "button-loading",
        enabled = true,
    } = props

    let iconWrapper = ``
    let variantStyle;
    let sizeStyle;
    let spinnerColor = 'steelBlue'

    const extraSmallSize = ` ${!padding && 'py-1 px-4'}  ${!textSize && 'text-xs'}`
    const smallSize = ` ${!padding && 'py-2 px-4'}  ${!textSize && 'text-sm'}`
    const mediumSize = ` ${!padding && 'py-3 px-8'} ${!textSize && 'text-base'}`
    const largeSize = ` ${!padding && 'py-4 px-10'} ${!textSize && 'text-lg'}`

    const focusStyle = ` ${!focus && 'focus:outline-none focus:border-blue-300 focus:shadow-outline'}`
    const shadowStyle = `shadow-sm`

    const primaryVariant = `${shadowStyle} ${focusStyle} ${!color && 'text-white'} ${!bg && 'bg-indigo-700'} 
    ${!hover && enabled && 'hover:bg-indigo-600'}`

    const secondaryVariant = `${shadowStyle} ${focusStyle} ${!color && 'text-indigo-700'}   ${!bg && 'bg-indigo-100'} 
    ${!hover && enabled && 'hover:bg-indigo-200 text-indigo-600'}`

    const darkVariant = `${shadowStyle}  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 ${!color && 'text-white'}  ${!bg && 'bg-gray-800'} 
    ${!hover && enabled && 'hover:text-gray-100 hover:bg-gray-900'}`

    const outlineVariant = `${shadowStyle} ${focusStyle} ${!bg && 'bg-white'} ${!color && 'text-gray-700'} border border-gray-300 shadow ${!hover && enabled && 'hover:bg-gray-50 '}`

    const textVariant = ` ${!focus && 'focus:outline-none'} ${!bg && 'bg-transparent'}
     ${!color && 'text-gray-700'} ${!hover && enabled && 'hover:text-gray-900'}`

    let iconMargin = 0

    switch (size) {
        case 'extra-small':
            iconWrapper = iconWrapper.concat(' h-4 w-4 ')
            sizeStyle = extraSmallSize
            iconMargin = 2
            break
        case 'small':
            iconWrapper = iconWrapper.concat(' h-4 w-4 ')
            iconMargin = 2

            sizeStyle = smallSize
            break
        case 'large':
            iconWrapper = iconWrapper.concat(' h-6 w-6 ')
            iconMargin = 2

            sizeStyle = largeSize
            break
        default:
            iconWrapper = iconWrapper.concat(' h-6 w-6 ')
            iconMargin = 2

            sizeStyle = mediumSize
            break

    }

    if (props.leadingIcon) {
        iconWrapper = iconWrapper.concat(` mr-${iconMargin} `)
    } else {
        iconWrapper = iconWrapper.concat(' mr-0')
    }
    if (props.trailingIcon) {
        iconWrapper = iconWrapper.concat(` ml-${iconMargin} `)
    } else {
        iconWrapper = iconWrapper.concat(' ml-0')
    }

    switch (variant) {
        case 'secondary':
            variantStyle = secondaryVariant
            break
        case 'outline':
            variantStyle = outlineVariant
            break
        case 'dark':
            variantStyle = darkVariant
            break
        case 'text':
            variantStyle = textVariant
            break
        default:
            variantStyle = primaryVariant
            spinnerColor = 'aqua'
            break
    }

    const styles = ` normal-case text-center border-transparent 
            ${enabled ? 'cursor-pointer' : 'cursor-default'} justify-center transition duration-150 items-center flex  
              ${!rounded && 'rounded-md'} leading-6 font-medium 
             ${variantStyle} ${sizeStyle} ${className}`

    const button = () => <button
        type='button'
        ref={ref}
        className={styles}
        onClick={(e) => {
            if (enabled && onClick) {
                e.stopPropagation()
                onClick(e)
            }
        }}>
        {loading ?
            <div id={loadingId}>

                <Spinner name="pulse" color={spinnerColor} />

            </div>
            :
            <div className='flex items-center'>
                {props.leadingIcon &&
                    <div className={iconWrapper}>
                        <props.leadingIcon className='h-full w-full' />
                    </div>
                }

                {children}

                {props.trailingIcon &&
                    <div className={iconWrapper}>
                        <props.trailingIcon className='h-full w-full' />
                    </div>
                }
            </div>
        }
    </button>

    return (
        typeSubmit ?
            loading ?
                button()
                :

                <div
                    className={styles}
                >

                    <div className='flex items-center'>
                        {props.leadingIcon &&
                            <div className={iconWrapper}>
                                <props.leadingIcon className='h-full w-full' />
                            </div>
                        }

                        <input
                            ref={ref}
                            value={children}
                            className='cursor-pointer'
                            type='submit'
                            name="submit"
                        />

                        {props.trailingIcon &&
                            <div className={iconWrapper}>
                                <props.trailingIcon className='h-full w-full' />
                            </div>
                        }
                    </div>

                </div>
            :
            button()

    );
};

export default Button