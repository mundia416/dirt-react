import React from 'react';
import Alert from '..';


interface Props {
    isShown: any,
    fullScreen?: boolean,
    showDismiss?: boolean
    className?: string,

}

const ErrorAlert: React.FC<Props> = ({
    isShown,
    className,
    fullScreen = false,
    showDismiss = false }) => {

    return (
        <div
            className={isShown ? `w-full ${fullScreen && 'h-full flex items-center px-12 justify-center'} ` : ''}
        >

            <Alert
                className={className}
                showDismiss={showDismiss}
                isShown={isShown ? true : false}
                variant='error'
                title={'Error'}
                content={`Oops! something seems to have gone wrong, please try again.`} />
        </div>
    );
};

export default ErrorAlert