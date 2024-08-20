import React from 'react';
import Container from '..';
import Text from '../../text'

const Demo = () => {
    return (
        <div className='bg-gray-100 min-h-screen flex flex-col justify-evenly'>
            <Container narrow={false} tailwind='h-64 bg-red-300'>
                <div className='h-full w-full bg-gray-400 flex justify-center items-center'>                
                <Text>Container doesnt have narrow content. it is full screen on mobile view</Text>
                </div>
            </Container>

            <div className='h-px bg-gray-900' />

            <Container narrow={true} tailwind='h-64 bg-blue-300'>
                <div className='h-full w-full bg-gray-400 flex justify-center items-center'>
                    <Text>Container has narrow content. it is full screen on mobile view</Text>
                </div>
            </Container>

        </div>
    );
};

export default Demo;