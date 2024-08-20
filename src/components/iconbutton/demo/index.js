import React from 'react';
import styled from 'styled-components';
import {ReactComponent as ArrowBackSVG} from './arrow-back.svg'
import Icon from '..';
import IconButton from '..';

const Container = styled.div`
background-color:${({ theme }) => theme.bgRed100};
min-height: 100vh;
display: flex;
align-items: center;
justify-content: space-evenly;
`
const Demo = () => {
    return (
        <Container>
            <IconButton src={<ArrowBackSVG/>} round={true} hasBackground={true}/>
            <IconButton src={<ArrowBackSVG/>} round={false} hasBackground={true}/>
            <IconButton src={<ArrowBackSVG/>} hasBackground={false}/>

        </Container>
    );
};

export default Demo;