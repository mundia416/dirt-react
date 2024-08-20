import React from 'react';
import styled from 'styled-components';
import Text from '..';



const Demo = () => {
    const text ='my-2'
    return (
        <div className='flex min-h-screen flex-col justify-evenly bg-gray-100 items-center'>
            <Text type='text-small' tailwind={text}>This Is  text-small<br />This Is  text-small</Text>
            <Text type='text' tailwind={text}>This Is text<br />This Is text</Text>
            <Text type='text-large' tailwind={text}>This Is text-large<br />This Is text-large</Text>
            <Text type='heading-small' tailwind={text}>This Is heading-small<br />This Is heading-small</Text>
            <Text type='heading' tailwind={text}>This Is heading<br />This Is heading</Text>
            <Text type='heading-medium' tailwind={text}>This Is heading-medium<br />This Is heading-medium</Text>
            <Text type='heading-large' tailwind={text}>This Is heading-large<br />This Is heading-large</Text>


        </div>
    );
};

export default Demo;