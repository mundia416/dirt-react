import React from 'react';
import PropTypes from 'prop-types';
import Text from '../../../text'

const Simple = ({title}) => {
    return (
        <div className='w-full'>
            <div className='my-4 px-6'>
                <Text
                    type='text-small'
                    tailwind='text-gray-900 font-medium'
                    color>{title}</Text>
            </div>
        </div>
    );
};

Simple.propTypes = {
    
};

export default Simple;