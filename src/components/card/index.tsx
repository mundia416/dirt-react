import React from 'react';
import Text from '../text'



type Props = {
    testid?: string,
    children?: any,
    onClick?: () => void,
    className?: string,
    contentClassName?: string,
    rounded?: boolean,
    onAnimationEnd?: () => void,
    shadow?: boolean,
    header?: {
        heading?: string | null,
        subHeading?: string | null
    },
    mobileFlat?: boolean
}

export default function Card({ testid, children, onClick, className, contentClassName, rounded = false, onAnimationEnd, shadow = false, header, mobileFlat = false }: Props) {
    let styles

    if (mobileFlat) {
        styles = `md:border md:border-gray-200 md:bg-white ${!shadow && 'md:shadow-md'} ${!rounded && 'md:rounded-lg'}`
    } else {
        styles = `border border-gray-200 bg-white ${!shadow && 'shadow-md'} ${!rounded && 'rounded-lg'}`
    }

    return (
        <div
            data-testid={testid}
            onAnimationEnd={onAnimationEnd}
            className={`${styles} ${className}`}
            onClick={onClick}>
            {header &&
                <div className='p-4 border-b border-gray-200'>
                    <Text
                        color
                        className='font-bold text-gray-800 select-none'>{header.heading}</Text>
                    <Text
                        textSize
                        className=' text-xs select-none'
                        type='text-small'>{header.subHeading}</Text>
                </div>
            }
            <div className={`` + contentClassName}>
                {children}
            </div>
        </div>
    );
};



