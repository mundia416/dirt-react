import React from 'react';
import Text from '../text'



type Props = {
    testid?: string,
    children?: any,
    onClick?: () => void,
    className?: string,
    /**@deprecated */
    tailwind?: string,
    rounded?: boolean,
    onAnimationEnd?: () => void,
    shadow?: boolean,
    header?: {
        heading?: string | null,
        subHeading?: string | null
    },
    mobileFlat?: boolean
}

export default function Card({ testid, children, onClick, className, tailwind, rounded = false, onAnimationEnd, shadow = false, header, mobileFlat = false }: Props) {
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
            className={`${styles} ${tailwind} ${className}`}
            onClick={onClick}>
            {header &&
                <div className='p-4 border-b border-gray-200'>
                    <Text
                        color
                        tailwind='font-bold text-gray-800'>{header.heading}</Text>
                    <Text
                        textSize
                        tailwind=' text-xs'
                        type='text-small'>{header.subHeading}</Text>
                </div>
            }

            {children}
        </div>
    );
};



