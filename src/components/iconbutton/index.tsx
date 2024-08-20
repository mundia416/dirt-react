import React from 'react';
import Icon, { Props as IconProps } from '../icon';


interface Props extends IconProps {

}

const IconButton = (props: Props) => {
    const { hasBackground, className } = props

    return (
        <Icon
            {...props}
            className={`cursor-pointer 
                ${('hover:' + (hasBackground ? 'bg-gray-300' : 'bg-gray-200'))}
                transition duration-200 ${className}`}
        />
    );
};




export default IconButton;