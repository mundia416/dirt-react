import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import DefaultCard from '../../card';
import styled from 'styled-components'
import { useFadeAnimChild } from '../../use-fade-anim'
import Simple from './simple'
import Condensed from './condensed'
import ActionBelow from './action-below'
import Avatar from './avatar'
import Split from './split'
import ButtonBelow from './button-below'
import { XMarkIcon } from '@heroicons/react/24/outline';


const Card = styled(DefaultCard)`
${({ fadeOut, theme }) => fadeOut ? theme.fadeOutSize : theme.fadeInSize};
`


const Content = (props) => {
    const { variant, onCloseComplete, stopRender, isShown, showDismiss, timeoutMillis, tailwind, className,
        top, left, right, bottom, onClick, fixed, testid } = props


    const [showDismissState, setShowDismissState] = useState(showDismiss)


    const { close, fadeOut, onAnimationEnd } = useFadeAnimChild(isShown, stopRender, onCloseComplete)

    let variantView

    useEffect(() => {
        if (isShown) {
            setTimeout(() => close(), timeoutMillis)
        }
    }, [isShown])

    switch (variant) {
        case 'simple':
            variantView = <Simple
                {...props}
            />
            break
        case 'condensed':
            variantView = <Condensed
                {...props}
            />
            break
        case 'action-below':
            variantView = <ActionBelow
                {...props}
            />
            break
        case 'avatar':
            variantView = <Avatar
                setShowDismiss={setShowDismissState}
                {...props}
            />
            break
        case 'split':
            variantView = <Split
                setShowDismiss={setShowDismissState}
                {...props}
            />
            break
        case 'button-below':
            variantView = <ButtonBelow
                {...props}
            />
            break
    }

    return (
        <Card
            id={props.id}
            onAnimationEnd={onAnimationEnd}
            fadeOut={fadeOut}
            onClick={onClick}
            tailwind={`${fixed ? 'fixed' : 'absolute'} ${top && 'top-0'} ${left && 'left-0'} ${right && 'right-0'} ${bottom && 'bottom-0'} flex max-w-sm shadow-2xl m-4 border border-gray-300 ${tailwind} ${className}`}
        >
            <div data-testid='error-notification'>
                {variantView}
            </div>

            <div className={`${variant === 'condensed' && 'flex items-center h-full'}`}>
                {showDismissState &&
                    <XMarkIcon
                        className={`p-1 h-8 w-8 hover:bg-gray-100 top-0 right-0 text-gray-500 m-2
                    hover:text-gray-600`}
                        onClick={() => close()}
                    />
                }
            </div>
        </Card>
    );
};

export default Content;