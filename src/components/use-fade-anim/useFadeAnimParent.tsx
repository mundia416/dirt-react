import { useEffect, useState } from 'react'



type Props = {
    isShown?: boolean
}
/**
  * this hook is used on the parent component that controls the condition of whether the child
  * component which contains the content should be rendered or not
  */
export const useFadeAnimParent = ({ isShown }: Props) => {
    const [render, setRender] = useState(isShown);

    /** should be called to completely remove the child component from the DOM 
     * pass this to the child component as a prop in order to allow the child component
     * to notify the parent component that it is done with the animations it can be
     * removed
    */
    const stopRender = () => setRender(false);

    useEffect(() => {
        if (isShown) {
            setRender(true);
        } else {
            setRender(true)
        }
    }, [isShown])

    return { render, stopRender }
}

export default useFadeAnimParent;