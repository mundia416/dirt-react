import React from 'react';
import PropTypes from 'prop-types';
import Text from '../../../text'
import Button from '../../../button'

const Split = ({ title, content, negativeText, onNegativeClick, onPositiveClick, positiveText, setShowDismiss }) => {
    setShowDismiss(false)

    return (
        <div className='w-full flex pl-4'>

            <div className='my-4 mr-4'>
                <Text
                    type='text-small'
                    tailwind='text-gray-900 font-medium'
                    color>{title}</Text>

                <Text

                    type='text-small'
                >{content}</Text>

            </div>

            <div className='h-full flex flex-col justify-evenly border-l border-gray-300'>
                <Button
                    color
                    size='extra-small'
                    hover
                    textSize
                    variant='text'
                    tailwind={`border-b border-gray-300  text-xs flex-1
                        text-indigo-600  tracking-tight hover:text-indigo-400 pl-0 `}
                    onClick={onPositiveClick}
                >{positiveText}</Button>
                <Button
                    textSize
                    size='extra-small'
                    variant='text'
                    tailwind='tracking-tight text-xs flex-1 whitespace-no-wrap text-xs'
                    onClick={onNegativeClick}
                >{negativeText}</Button>

            </div>
        </div>
    );
};

Split.propTypes = {

};

export default Split;