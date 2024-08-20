import React from 'react';
import { useFadeAnimParent } from '../use-fade-anim';
import { AlertProps } from './AlertProps';
import Content from './content';



const Alert = (props: AlertProps) => {

    const { isShown,
        variant = 'warning'
    } = props

    const { render, stopRender } = useFadeAnimParent({ isShown });

    return (
        <div>
            {render &&
                <Content
                    stopRender={stopRender}
                    {...props}
                    variant={variant}
                    className={props.className}
                />}
        </div>
    );
};


export default Alert;