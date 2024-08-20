import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Text from '../text'

const Tab = ({ variant, className, children, isSelected, onClick, textAlign, tailwind, bg, 
    color,hover,testid}) => {

    const darkVariant = `  ${isSelected ? ((!bg && ' bg-gray-900') + (!color && ' text-gray-100')) :
        (!hover && ' hover:text-gray-200  hover:bg-gray-700 ') + (!color && ' text-gray-400 ')}`

    const grayVariant = ` ${isSelected ? ((!bg && ' bg-gray-400') + (!color && ' text-gray-800')) :
        (!color && ' text-gray-700 ') + !bg && ' bg-transparent' + 
        (!hover && ' hover:text-gray-600 hover:bg-gray-200 ')}`

    const underlineVariant = ` rounded-b-none  h-full py-0 ${!color && ' bg-transparent'} 
     ${isSelected ? ' border-b-2 border-indigo-700 ' + (!color && ' text-gray-900 ') :
            (!hover && ' hover:text-gray-600 ') + (!color && ' text-gray-700 ')}`

    const colorVariant = `${isSelected ? ((!bg && ' bg-indigo-200 ') + (!color && ' text-indigo-700 ')) :
        (!hover && ' hover:text-indigo-600 ') + (!bg && ' bg-transparent ')
         + (!color && ' text-gray-700 ')}`

    let variantStyle;

    switch (variant) {
        case 'gray':
            variantStyle = grayVariant;
            break
        case 'color':
            variantStyle = colorVariant
            break
        case 'underline':
            variantStyle = underlineVariant
            break
        default:
            variantStyle = darkVariant
            break
    }

    let alignText

    switch (textAlign) {
        case 'left':
            alignText = 'justify-start'
            break
        case 'right':
            alignText = 'justify-end'
            break
        default:
            alignText = 'justify-center'
            break
    }

    const styles = `cursor-pointer px-3 flex py-2  rounded-md mx-2 items-center
          transition duration-150 ${alignText} ${variantStyle}  ${tailwind} ${className}`

    return (
        <div
        data-testid={testid}
         className={styles}
            onClick={onClick}
        >
            <Text
                color
                className={`capitalize font-medium`}> {children} </Text>
        </div>
    );
};

const tailwindProps = {
    bg: false,
    color: false,
    hove: false,
}

Tab.defaultProps = {
    ...tailwindProps,
    isSelected: false,
    variant: 'dark',
    textAlign: 'center'
}

Tab.propTypes = {
    onClick: PropTypes.func,
    variant: PropTypes.oneOf(['dark', 'gray', 'color', 'underline']),
    textAlign: PropTypes.oneOf(['center', 'left', 'right'])
};

export default Tab;