import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Checkbox = ({ testid, onToggle, placeholder, className,labelTailwind ,tailwind, label, value }) => {
    const [isActive, setIsActive] = useState(value)

    useEffect(() => {
        setIsActive(value)
    }, [value])

    return (
        <div>
            <div className='flex items-center'>

                <input
                    data-testid={testid}
                    onChange={()=>{}}
                    checked={isActive}
                    onClick={() => {
                        onToggle && onToggle(!isActive)
                        setIsActive(!isActive)
                    }}
                    className={`focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded ${tailwind} ${className}`}
                    type='checkbox'
                    placeholder={placeholder} />


                <label className={"ml-2 block text-sm leading-5 text-gray-900 "+labelTailwind}>
                    {label}
                </label>
            </div>
        </div>
    )

};

const tailwindProps = {
    focus: false,
}

Checkbox.defaultProps = {
    ...tailwindProps,
}

export const proptypes = {
    label: PropTypes.string,
};

Checkbox.propTypes = proptypes;

export default Checkbox;