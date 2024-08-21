import React from 'react';
import Spinner from 'react-spinkit'

interface Props {
    className?: string,
    fullscreen?: boolean,
}

const Loading: React.FC<Props> = ({ className, fullscreen }) => {
    return (
        <div
            className={`w-full h-full flex  ${fullscreen && 'w-screen h-screen'} items-center justify-center ${className}`}>
            <Spinner name="three-bounce" color="steelblue" />

        </div>
    );
};



export default Loading;