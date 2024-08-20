import React from 'react';
import Spinner from 'react-spinkit'

export interface ButtonProps {
    loadingTestid?: string,
    testid?: string,
    className?: string,
    iconClassName?: string
    /**
     * @deprecated use className instead
     */
    tailwind?: string,
    size?: 'large' | 'default' | 'small' | 'extra-small',
    variant?: 'primary' | 'secondary' | 'outline' | 'dark' | 'text',
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent> | undefined) => void,
    iconLeft?: any,
    iconRight?: any,
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
    img?: boolean,
    ref?: any
}



const Button: React.FC<ButtonProps> = ({ loadingTestid,
    testid,
    className,
    tailwind,
    ref,
    size = "default",
    variant = 'primary',
    onClick,
    iconLeft,
    iconRight,
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
    img,
    iconClassName
}) => {
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

    const outlineVariant = `${shadowStyle} ${focusStyle} ${!bg && 'bg-white'} ${!color && 'text-gray-700'} border border-gray-300 
    ${!hover && enabled && 'hover:bg-gray-50 '}`

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
            iconMargin = 3

            sizeStyle = largeSize
            break
        default:
            iconWrapper = iconWrapper.concat(' h-6 w-6 ')
            iconMargin = 3

            sizeStyle = mediumSize
            break

    }

    if (iconLeft) {
        iconWrapper = iconWrapper.concat(` mr-${iconMargin} `)
    } else {
        iconWrapper = iconWrapper.concat(' mr-0')
    }
    if (iconRight) {
        iconWrapper = iconWrapper.concat(` ml-${iconMargin} `)
    } else {
        iconWrapper = iconWrapper.concat(' ml-0')
    }

    if (iconClassName) {
        iconWrapper = iconClassName
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
             ${variantStyle} ${sizeStyle} ${tailwind} ${className}`

    const button = () => <button
        data-testid={testid}
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
            <div id={loadingId} data-testid={loadingTestid}>

                <Spinner name="pulse" color={spinnerColor} />

            </div>
            :
            <div className='flex items-center'>
                {iconLeft &&
                    <div className={iconWrapper}>
                        {img ?
                            <img
                                className='w-full h-full'
                                src={iconLeft} alt="icon left" />
                            :
                            iconLeft}
                    </div>
                }

                {children}

                {iconRight &&
                    <div className={iconWrapper}>
                        {img ?
                            <img
                                className='w-full h-full'
                                src={iconRight} alt="icon right" />
                            :
                            iconRight}
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
                <input
                    ref={ref}
                    data-testid={testid}
                    value={children}
                    type='submit'
                    name="submit"
                    className={styles}
                />

            :
            button()

    );
};

export default Button