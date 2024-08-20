import React from 'react';
import PropTypes from 'prop-types';
import Text from '../../../text'
import Icon from '../../../icon'
import Button from '../../../button'
const ActionBelow = ({ title, content, icon, onPositiveClick, onNegativeClick, positiveText, negativeText }) => {
    return (
        <div className='w-full flex'>
            <Icon
                hasBackground={false}
                color
                size
                tailwind=' text-gray-600 mt-4 h-6 w-6 mx-4'
                src={icon} />

            <div className='my-4'>
                <Text
                    type='text-small'
                    tailwind='text-gray-900 font-medium'
                    color>{title}</Text>

                <Text

                    type='text-small'
                >{content}</Text>

                <div className='flex'>
                    <Button
                        color
                        size='extra-small'
                        hover
                        variant='text'
                        tailwind='text-indigo-600  tracking-tight hover:text-indigo-400 pl-0 '
                        onClick={onPositiveClick}
                    >{positiveText}</Button>
                    <Button
                        size='extra-small'
                        variant='text'
                        tailwind='tracking-tight'
                        onClick={onNegativeClick}
                    >{negativeText}</Button>

                </div>
            </div>
        </div>
    );
};

ActionBelow.propTypes = {

};

export default ActionBelow;