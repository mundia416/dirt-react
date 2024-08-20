import React from 'react';
import PropTypes from 'prop-types';
import Text from '../../../text'
import { TicketIcon } from '@heroicons/react/solid';

const Condensed = ({ title, content, icon }) => {
    return (
        <div className='w-full flex'>
            <TicketIcon
                className='text-green-600 mt-4 h-6 w-6 mx-2'
            />

            <div className='my-4'>
                <Text
                    type='text-small'
                    tailwind='text-gray-900 font-medium'
                    color>{title}</Text>

                <Text

                    type='text-small'
                >{content}</Text>
            </div>
        </div>
    );
};

Condensed.propTypes = {

};

export default Condensed;