import React from 'react';
import styled from 'styled-components';
import {ReactComponent as GlobeSVG} from './globe.svg'
import Icon from '..';

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
            <Icon src={<GlobeSVG/>}  hasBackground={true}/>
            <Icon src={<GlobeSVG/>} round={false} hasBackground={true}/>
            <Icon src={<GlobeSVG/>} hasBackground={false}/>

        </Container>
    );
};

export default Demo;