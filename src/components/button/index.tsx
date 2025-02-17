import React, { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';
import Loading, { LoadingProps } from '../loading';
import AnimatedDiv from '../animated-div';

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
    loading?: boolean | { variant?: LoadingProps['variant'] },
    loadingId?: string,
    enabled?: boolean,
    ref?: any,
    leadingIcon?: string | ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & {
        title?: string;
        titleId?: string;
    } & RefAttributes<SVGSVGElement>>,
    trailingIcon?: string | ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & {
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
        enabled = true,
    } = props

    let iconWrapper = ``
    let variantStyle;
    let sizeStyle;
    let spinnerColor = '#fff'

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

    const outlineVariant = `${shadowStyle} ${focusStyle} ${!bg && 'bg-white'} ${!color && 'text-gray-700'} border border-gray-400 shadow ${!hover && enabled && 'hover:bg-gray-50 '}`

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
            spinnerColor = '#4f46e5'
            break
        case 'outline':
            variantStyle = outlineVariant
            spinnerColor = '#4f46e5'
            break
        case 'dark':
            variantStyle = darkVariant
            spinnerColor = '#fff'
            break
        case 'text':
            variantStyle = textVariant
            spinnerColor = '#4f46e5'
            break
        default:
            variantStyle = primaryVariant
            spinnerColor = '#fff'
            break
    }

    const styles = `${variantStyle} normal-case text-center border-transparent 
            ${enabled ? 'cursor-pointer' : 'cursor-default'} justify-center transition duration-150 items-center flex  
              ${!rounded && 'rounded-md'} leading-6 font-medium 
              ${sizeStyle} ${className}`

    const button = () => <AnimatedDiv>
        <button
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
                <div>

                    <Loading
                        variant={typeof loading === 'boolean' ? 'oval' : loading.variant}
                        size='tiny'
                        color={spinnerColor} />

                </div>
                :
                <div className='flex items-center'>
                    {props.leadingIcon &&
                        <div className={iconWrapper}>

                            {typeof props.leadingIcon === 'string' ?
                                <img
                                    alt='leading icon'
                                    className='h-full w-full object-contain'
                                    src={props.leadingIcon}
                                />
                                :
                                <props.leadingIcon className='h-full w-full' />
                            }
                        </div>
                    }

                    {children}

                    {props.trailingIcon &&
                        <div className={iconWrapper}>

                            {typeof props.trailingIcon === 'string' ?
                                <img
                                    alt='leading icon'
                                    className='h-full w-full object-contain'
                                    src={props.trailingIcon}
                                />
                                :
                                <props.trailingIcon className='h-full w-full' />
                            }
                        </div>
                    }
                </div>
            }
        </button>
    </AnimatedDiv>

    return (
        typeSubmit ?
            loading ?
                button()
                :

                <AnimatedDiv
                    className={styles + ' relative'}
                >

                    <div className='flex items-center'>
                        {props.leadingIcon &&
                            <div className={iconWrapper}>

                                {typeof props.leadingIcon === 'string' ?
                                    <img
                                        alt='leading icon'
                                        className='h-full w-full object-contain'
                                        src={props.leadingIcon}
                                    />
                                    :
                                    <props.leadingIcon className='h-full w-full' />
                                }

                            </div>
                        }

                        <input
                            ref={ref}
                            value={children}
                            className='cursor-pointer  absolute z-10 left-0 top-0 bottom-0 right-0'
                            type='submit'
                            name="submit"
                        />


                        <input
                            ref={ref}
                            value={children}
                            className='text-transparent'
                            type='submit'
                            name="submit"
                        />

                        {props.trailingIcon &&
                            <div className={iconWrapper}>
                                {typeof props.trailingIcon === 'string' ?
                                    <img
                                        alt='trailing icon'
                                        className='h-full w-full object-contain'
                                        src={props.trailingIcon}
                                    />
                                    :
                                    <props.trailingIcon className='h-full w-full' />
                                }
                            </div>
                        }
                    </div>

                </AnimatedDiv>
            :
            button()

    );
};

export default Button