import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const Toggle = ({ onToggle, tailwind, className,value }) => {
    const [isActive, setIsActive] = useState(value)
    
   
    useEffect(()=>{
        setIsActive(value)
    },[value])

    return (
        <div
            className={`${tailwind} ${className}`}
            onClick={() => {
                onToggle && onToggle(!isActive)
                setIsActive(!isActive)
            }}>
            <span
                role="checkbox"
                className={`${isActive ? 'bg-green-500' : 'bg-gray-200'} text-left relative inline-block 
 flex-shrink-0 h-6 w-12 border-2 border-transparent rounded-full cursor-pointer
  transition-colors ease-in-out duration-200 focus:outline-none focus:shadow-outline 
  bg-gray-200`}>

<span aria-hidden="true"
                    className={`${isActive ? 'translate-x-5' : 'translate-x-0'} translate-x-0 inline-block h-5 w-5 
  rounded-full bg-white shadow transform transition ease-in-out duration-200"`}></span>

   </span>

        </div>
    )
}

Toggle.defaultProps = {
    value: false
}

Toggle.propTypes = {
    onToggle: PropTypes.func,
    value: PropTypes.bool

}

export default Toggle