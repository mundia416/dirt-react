import React from 'react';
import styled from "styled-components";


const Div = styled.div<{ isGray: any }>`
  background-color: ${({ theme, isGray }) => (isGray ? theme.gray50 : "white")};
`;


type Props = {
    onClick?: () => void,
    isGray?: boolean,
    className?: string,
    children?: any
}
/**
 * a wrapper is simply a div element 
 */
const Wrapper = ({ onClick, isGray, className, children }: Props) => {
    return (
        <Div
            onClick={onClick}
            isGray={isGray}
            className={className}>
            {children}
        </Div>
    );
};

Wrapper.propTypes = {

};

export default Wrapper;