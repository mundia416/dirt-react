import React, { useState } from 'react';
import DefaultAlert from '../../alert'
import styled from 'styled-components';
import DefaultButton from '../../button'

const Alert = styled(DefaultAlert)`
margin: 24px;
`
const Button = styled(DefaultButton)`
margin: 24px;
`

const Demo = () => {
    const [show1, setShow1] = useState(false)
    const [show2, setShow2] = useState(false)
    const [show3, setShow3] = useState(false)
    const [show4, setShow4] = useState(false)
    const [show5, setShow5] = useState(false)
    const [show6, setShow6] = useState(false)
    const [show7, setShow7] = useState(false)

    return (

        <div className='flex flex-col justify-evenly items-center'>

            <Button
                onClick={() => setShow1(!show1)}> Warning</Button>

            <Button
                onClick={() => setShow2(!show2)}> Error</Button>


            <Button
                onClick={() => setShow3(!show3)}> Success</Button>


            <Button
                onClick={() => setShow4(!show4)}> Info</Button>
            <Button
                onClick={() => setShow5(!show5)}> With Link</Button>
            <Button
                onClick={() => setShow6(!show6)}> Actions</Button>
            <Button
                onClick={() => setShow7(!show7)}> show Dismiss</Button>

            <Alert
                isShown={show1}
                onCloseComplete={() => setShow1(false)}
                title='Attention needed'
                content={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.`}
                variant='warning' />

            <Alert
                isShown={show2}
                onCloseComplete={() => setShow2(false)}
                title='Attention needed'
                content={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.`}
                variant='error' />

            <Alert
                isShown={show3}
                onCloseComplete={() => setShow3(false)}
                title='Attention needed'
                content={`Lorem ipsum dolor sit ameo eiusmod tempor incididunt ut
        labore et dolore magna aliqua.`}
                variant='success' />

            <Alert
                isShown={show4}
                onCloseComplete={() => setShow4(false)}
                title='Attention needed'
                content={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.`}
                variant='info' />

            <Alert
                isShown={show5}
                onCloseComplete={() => setShow5(false)}
                link={{
                    title: 'Details',
                    url: 'https://unsplash.com'
                }
                }
                content={`A new Software update is available.See whats new.`}
                variant='info' />

            <Alert
                actions
                isShown={show6}
                onNegativeClick={() => setShow6(false)}
                onCloseComplete={() => setShow6(false)}
                title='Order completed'
                content={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.`}
                positiveText='View status'
                negativeText='Dismiss'
                variant='success' />

            <Alert
                isShown={show7}
                showDismiss
                onCloseComplete={() => setShow7(false)}
                title='Successfully uploaded'
                variant='success' />


        </div>
    );

};

export default Demo;