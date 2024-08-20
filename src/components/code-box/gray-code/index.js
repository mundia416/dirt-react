import React from 'react';
import styled from 'styled-components'


const Text = styled.pre`
    display: block;
    font-size: 13px;
    line-height: 1.42857143;
    word-break: break-all;
    font-family: monospace,monospace;
    white-space: pre;    
    font-weight: 400;
    font-kerning: normal;
    font-feature-settings: "kern", "liga", "clig", "calt";
    font-stretch: normal;
    font: 87.5%/1.6 'Open Sans','Helvetica',sans-serif;
    font-style: normal;
    font-variant-ligatures: normal;
    font-variant-caps: normal;
    font-variant-numeric: normal;
    font-variant-east-asian: normal;
`



const GrayCode = ({ children }) => {
    return (
        <Text className='text-gray-500'>{children}</Text>
    )
}

export default GrayCode