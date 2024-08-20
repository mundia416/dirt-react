import React from 'react';
import PropTypes from 'prop-types';
import Text from '../../../text'
import Button from '../../../button'
import Avatar from '../../../avatar'

const ButtonBelow = ({ title, content, avatar, onNegativeClick, negativeText, onPositiveClick, positiveText, setShowDismiss }) => {

    return (
        <div className='w-full flex pl-4'>
            <Avatar
                size='large'
                tailwind=' mt-4 mr-4'
                src={avatar} />

            <div className='my-4 mr-12'>
                <Text
                    type='text-small'
                    tailwind='text-gray-900 font-medium'
                    color>{title}</Text>

                <Text

                    type='text-small'
                >{content}</Text>



                <div className='flex mt-4'>
                    <Button
                        textSize
                        
                        size='extra-small'
                        variant='primary'
                        tailwind='text-xs tracking-tight  mr-2 '
                        onClick={onPositiveClick}
                    >{positiveText}</Button>
                    <Button
                        textSize
                        
                        size='extra-small'
                        variant='outline'
                        tailwind='tracking-tight text-xs '
                        onClick={onNegativeClick}
                    >{negativeText}</Button>

                </div>
            </div>

        </div>
    );
};

export default ButtonBelow;