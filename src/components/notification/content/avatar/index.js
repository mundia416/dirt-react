import React from 'react';
import PropTypes from 'prop-types';
import Text from '../../../text'
import Button from '../../../button'
import Avatar from '../../../avatar'

const AvatarNotification = ({ title, content, avatar, onPositiveClick, positiveText, setShowDismiss }) => {
    setShowDismiss(false)

    return (
        <div className='w-full flex pl-4'>
            <Avatar
                size='large'
                tailwind=' mt-4 mr-4'
                src={avatar} />

            <div className='my-4 mr-4'>
                <Text
                    type='text-small'
                    tailwind='text-gray-900 font-medium'
                    color>{title}</Text>

                <Text

                    type='text-small'
                >{content}</Text>

            </div>

            <Button
                color
                size='extra-small'
                hover
                variant='text'
                tailwind={`text-indigo-500  hover:text-indigo-400 pl-0 h-full w-20 border-l
                        border-gray-300 rounded-l-none tracking-tight `}
                onClick={onPositiveClick}
            >{positiveText}</Button>
        </div>
    );
};

AvatarNotification.propTypes = {

};

export default AvatarNotification;