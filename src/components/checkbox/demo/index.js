import React from 'react';
import styled from 'styled-components';
import CheckBox from '..';

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


            <CheckBox
                label='Remember me'
            />

           
        </Container>
    );
};

export default Demo;