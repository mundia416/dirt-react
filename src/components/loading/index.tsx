import React from 'react';
import Spinner from 'react-spinkit'

interface Props {
    /**
     * @deprecated use className
     */
    tailwind?: string,
    className?: string,
    screen?: boolean,
    testid?: string
}

const Loading: React.FC<Props> = ({ className, screen, testid, tailwind }) => {
    return (
        <div
            data-testid={testid}
            className={`w-full h-full flex  ${screen && 'w-screen h-screen'} items-center justify-center ${tailwind} ${className}`}>
            <Spinner name="three-bounce" color="steelblue" />

        </div>
    );
};



export default Loading;