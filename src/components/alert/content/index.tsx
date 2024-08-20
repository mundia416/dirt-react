import React from 'react';
import WarningSVG from '../images/warning.svg'
import SuccessSVG from '../images/success.svg'
import ErrorSVG from '../images/error.svg'
import InfoSVG from '../images/info.svg'
import DismissSVG from '../images/dismiss.svg'
import ArrowRightSVG from '../images/arrow-right.svg'
import Text from '../../text'
import styled from 'styled-components'
import { useFadeAnimChild } from '../../use-fade-anim'
import Button from '../../button'
import { AlertProps } from '../AlertProps';
import IconButton from '../../iconbutton';
import Icon from '../../icon';

const Container = styled.div<{ fadeOut: any } >`
${({ fadeOut, theme }) => fadeOut ? theme.fadeOutSize : theme.fadeInSize};
`

interface Props extends AlertProps {
    stopRender: () => void
}

const Content = ({ showDismiss, link, variant, title, content, className, onPositiveClick,
    onNegativeClick, positiveText, negativeText, onCloseComplete, stopRender, isShown }: Props) => {

    const { close, fadeOut, onAnimationEnd } = useFadeAnimChild({ isShown, stopRender, onCloseComplete })
    let variantStyle
    let icon
    let iconStyle
    let titleStyle
    let contentStyle
    let buttonStyle
    let linkStyle

    switch (variant) {
        case 'warning':
            variantStyle = ` bg-yellow-100`
            icon = <WarningSVG />
            iconStyle = 'text-yellow-700'
            titleStyle = 'text-yellow-900'
            contentStyle = 'text-yellow-800'
            buttonStyle = 'text-yellow-900 hover:text-yellow-800'
            linkStyle = 'text-yellow-800 hover:text-yellow-700'

            break
        case 'error':
            variantStyle = ` bg-red-100`
            icon = <ErrorSVG />
            iconStyle = 'text-red-700'
            titleStyle = 'text-red-900'
            contentStyle = 'text-red-800'
            buttonStyle = 'text-red-900 hover:text-red-800'
            linkStyle = 'text-red-800 hover:text-red-700'

            break
        case 'success':
            variantStyle = ` bg-green-100`
            icon = <SuccessSVG />
            iconStyle = 'text-green-700'
            titleStyle = 'text-green-900'
            contentStyle = 'text-green-800'
            buttonStyle = 'text-green-900 hover:text-green-800'
            linkStyle = 'text-green-800 hover:text-green-700'

            break
        case 'info':
            variantStyle = ` bg-blue-100`
            icon = <InfoSVG />
            iconStyle = 'text-blue-700'
            titleStyle = 'text-blue-900'
            contentStyle = 'text-blue-800'
            buttonStyle = 'text-blue-900 hover:text-blue-800'
            linkStyle = 'text-blue-800 hover:text-blue-700'

            break
    }

    return (
        <Container
            onAnimationEnd={onAnimationEnd}
            fadeOut={fadeOut}
            className={`flex p-2 rounded-md ${variantStyle} ${className}`}>


            <Icon
                color
                hasBackground={false}
                png
                size
                className={`mt-4 h-6 w-6 mx-2 ${iconStyle}`}
                src={icon} />


            <div className='my-4 mr-4'>
                <Text
                    type='text-small'
                    tailwind={`text-gray-900 font-medium ${titleStyle}`}
                    color>{title}</Text>

                <Text
                    tailwind={`${contentStyle}`}
                    type='text-small'
                >{content}</Text>

                {positiveText || negativeText &&

                    <div className='flex'>
                        <Button
                            color
                            size='extra-small'
                            hover
                            variant='text'
                            className={`tracking-tight  pl-0  ${buttonStyle}`}
                            onClick={onPositiveClick}
                        >{positiveText}</Button>
                        <Button
                            color
                            hover
                            size='extra-small'
                            variant='text'
                            className={`tracking-tight ${buttonStyle}`}
                            onClick={onNegativeClick}
                        >{negativeText}</Button>

                    </div>
                }
            </div>

            {link &&
                <Button
                    color
                    size='extra-small'
                    hover
                    variant='text'
                    iconRight={ArrowRightSVG}
                    tailwind={`tracking-tight ml-6  ${linkStyle}`}
                    onClick={() => console.log(/**TODO GO TO THE LINK SUPPLIED */)}
                >{link.title}</Button>
            }


            {showDismiss &&
                <div className='h-full flex items-center'>
                    <IconButton
                        
                        
                        png
                        hasBackground={false}
                        src={DismissSVG}
                        className={` ml-6 ${buttonStyle}`}
                        onClick={() => close()}
                    />
                </div>
            }

        </Container>
    );
};



export default Content;