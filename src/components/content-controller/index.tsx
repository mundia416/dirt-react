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
    errorFullscreen?: boolean
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
    loadingFullscreen,
    errorFullscreen
}: Props) {

    return (
        <div  className={`w-full h-full ${className}`}>
            {
                loading ?
                    <div
                        className={'w-full h-full flex justify-center items-center ' + loadingClassName}>
                        <Loading fullscreen={loadingFullscreen} />
                    </div>
                    :
                    <>
                        {error ?
                            <div
                                className={`px-4 md:px-12 lg:px-24 flex w-full h-full justify-center items-center ${errorFullscreen && 'h-screen'}`}>
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

