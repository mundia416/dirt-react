"use client"
import React from 'react'
import  ErrorAlert  from '../alert/error'
import Loading from '../loading'


type Props = {
    data?: any
    loading?: boolean,
    error?: any,
    children?: any,
    className?: string,
    loadingClassName?: string
    loadingFullscreen?: boolean
}

/**
 * automatically controls showing of the error and loading and when querying data
 * from the server
 */
function ContentController({
    data,
    loading,
    error,
    children,
    className,
    loadingClassName,
    loadingFullscreen
}: Props) {

    return (
        <div  className={`w-full h-full ${className}`}>
            {
                loading ?
                    <div
                        className={'w-full h-full flex justify-center items-center ' + loadingClassName}>
                        <Loading screen={loadingFullscreen} />
                    </div>
                    :
                    <>
                        {error ?
                            <div
                                className=' flex w-full h-full justify-center items-center'>
                                <ErrorAlert
                                    isShown={error}
                                />
                            </div>


                            :
                            (data && children)
                        }
                    </>
            }
        </div>

    )
}


export default ContentController

