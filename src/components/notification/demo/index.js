import React, { useState } from 'react';
import Notification from '..'
import Button from '../../button'
import { ReactComponent as ArchiveSVG } from '../images/archive.svg'

const Demo = () => {
    const [show1, setShow1] = useState(false)
    const [show2, setShow2] = useState(false)
    const [show3, setShow3] = useState(false)
    const [show4, setShow4] = useState(false)
    const [show5, setShow5] = useState(false)
    const [show6, setShow6] = useState(false)

    return (
        <div className='flex flex-col items-center justify-evenly min-h-screen'>
            <Button
                onClick={() => setShow1(!show1)}> Simple</Button>

            <Button
                onClick={() => setShow2(!show2)}> Condensed</Button>


            <Button
                onClick={() => setShow3(!show3)}> Action Below</Button>


            <Button
                onClick={() => setShow4(!show4)}> Avatar</Button>
            <Button
                onClick={() => setShow5(!show5)}> Split</Button>
            <Button
                onClick={() => setShow6(!show6)}> Button Below</Button>

            <Notification
                variant='simple'
                isShown={show1}
                onCloseComplete={() => setShow1(false)}
                title='Successfully saved'
                content='anyone with a link can now view this file'
            />

            <Notification
                variant='condensed'
                isShown={show2}
                onCloseComplete={() => setShow2(false)}
                title='Discussion Archived'
            />
            <Notification
                variant='action-below'
                isShown={show3}
                onCloseComplete={() => setShow3(false)}
                title='Discussion Moved'
                content='anyone with a link can now view this w this file ann now view this file'
                negativeText='Dismiss'
                positiveText='Undo'
                onNegativeClick={() => setShow3(false)}
                icon={<ArchiveSVG />}
            />

            <Notification
                variant='avatar'
                isShown={show4}
                onCloseComplete={() => setShow4(false)}
                title='Emilia Gates'
                content='Sure! 8:30pm works great!...'

                positiveText='Reply'
                avatar='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'

            />

<Notification
                variant='button-below'
                isShown={show6}
                onCloseComplete={() => setShow6(false)}
                title='Emilia Gates'
                content='Sent you an invite to connect'
                onNegativeClick={() => setShow6(false)}
                negativeText='Decline'
                positiveText='Accept'
                avatar='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'

            />

            <Notification
                variant='split'
                isShown={show5}
                onCloseComplete={() => setShow5(false)}
                title='Discussion Moved'
                content='anyone with a link can now view this w this file ann now view this file'
                negativeText='Dont Allow'
                positiveText='Reply'
                onNegativeClick={() => setShow5(false)}
                icon={<ArchiveSVG />}
            />

        </div>
    );
};

export default Demo;