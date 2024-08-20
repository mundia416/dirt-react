import { useState, useEffect } from 'react';

type Props = {
    isShown?: boolean,
    stopRender: () => void
    onCloseComplete?: () => void
}

/**
  * this hook is used by the child component which contains the views which perform the actual animations
  */
const useFadeAnimChild = ({ isShown, stopRender, onCloseComplete }: Props) => {

    /** controls whether to show the fade out animation or not */
    const [fadeOut, setfadeOut] = useState(false);
    const [render, setRender] = useState(isShown);

    const close = () => {
        setRender(false);
        setfadeOut(true);
    }


    useEffect(() => {
        if (!isShown) {

            close()
        }

        setRender(isShown);
    }, [isShown])

    const onAnimationEnd = () => {
        if (!render) {
            stopRender();
            if (typeof onCloseComplete !== 'undefined') { onCloseComplete(); }
        }
    }

    return { close, fadeOut, onAnimationEnd }
}

export default useFadeAnimChild;