import React from 'react';
import styled from 'styled-components';
import DefaultFieldInput from '..';
import Container from '../../container';
import { ReactComponent as MailSVG } from '../images/mail.svg'
import { ReactComponent as HelpSVG } from '../images/help.svg'

const FieldInput = styled(DefaultFieldInput)`
margin-top:24px;
margin-bottom:24px;

`
const Demo = () => {
    return (
        <Container
            narrow
            tailwind='bg-gray-100 min-h-screen flex items-center flex-col p-16'>


            <FieldInput
                placeholder='afrocoderzm@gmail.com'
                label='Email Address' />


            <FieldInput
                placeholder='0.00'
                label='Email Address'
                inputTailWind='pl-6 pr-16'
                leadingTailwind='px-2'
                leadingText='$'
                trailingContent={
                    <div className="h-full">
                        <select ariaLabel="Currency"
                            className={`form-select  h-full py-0 pl-2  border-transparent focus:shadow-outline
                         bg-transparent text-gray-600 sm:text-sm sm:leading-5 outline-none 
                         transition duration-150 rounded`}>
                            <option>USD</option>
                            <option>CAD</option>
                            <option>EUR</option>
                        </select>
                    </div>
                } />

            <FieldInput
                placeholder='afrocoderzm@gmail.com'
                label='Email Address'
                tailwind='w-full'
                helpText='Make sure your password is not short and easy to guess' />

            <FieldInput
                error
                label='Email Address'
                tailwind='w-full'
                type='password'
                helpText='Make sure your password is not short and easy to guess' />

            <FieldInput
                placeholder='afrocoderzm@gmail.com'
                label='Email Address'
                tailwind='w-full'
                cornerHelpText='Optional' />

            <FieldInput
                leadingIcon={<MailSVG />}
                label='Email Address'
                tailwind='w-full'
                />

<FieldInput
                trailingIcon={<HelpSVG />}
                label='Email Address'
                tailwind='w-full'
                />

        </Container>
    );
};

export default Demo;