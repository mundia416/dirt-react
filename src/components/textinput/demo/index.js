import React from 'react';
import styled from 'styled-components';
import TextInput from '..';
import AppBar from '../../appbar'

const Container = styled.div`
background-color:${({ theme }) => theme.bgGray50};
min-height: 100vh;
display: flex;
align-items: center;
flex-direction: column;
justify-content: space-evenly;
`
const Demo = () => {
    return (
        <Container>


            <TextInput
                placeholder='placeholder text'
            />

            <AppBar
                tailwind='justify-center w-full'
                variant='dark'
            >
                <TextInput
                    variant='dark'
                    placeholder='placeholder text'
                />

            </AppBar>
        </Container>
    );
};

export default Demo;