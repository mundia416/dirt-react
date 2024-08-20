import { useEffect } from 'react'

/**
 * detects when the user clicks outside the passed ref. the ref should be attached to a 
 * components 'ref' prop.
 * @param refs the refs not to call the callback when they are clicked
 * @param active defines whether to detect if the outside of {refs} has been click
 */

const useClickOutside = (refs = [], onClickOutside, active = true) => {

    useEffect(() => {
        if (active) {
            const eventListener = (event) => {
                let executeCallback = true

                for (let i = 0; i < refs.length; i++) {
                    const ref = refs[i]
                    if (ref.current && ref.current.contains(event.target)) {
                        executeCallback = false;
                    }
                }

                if (executeCallback) {
                    onClickOutside()
                }

            }

            document.addEventListener('mousedown', eventListener)

            return () => document.removeEventListener('mousedown', eventListener)
        }
    }, [refs])
}

export default useClickOutside