"use client"
import React from 'react'
import ErrorAlert from '../alert/error'
import Loading, { LoadingProps } from '../loading'
import AnimatedDiv from '../animated-div'


type Props = {
    data?: any
    loading?: boolean,
    error?: any,
    children?: any,
    className?: string,
    loadingProps?: {
        fullScreen?: boolean
        className?: string
        color?: string
        variant?: LoadingProps['variant']
        size?: LoadingProps['size']
    }
    errorProps?: {
        fullScreen?: boolean
        className?: string
    }
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
    loadingProps,
    errorProps
}: Props) {

    return (
        <AnimatedDiv className={`w-full h-full ${className}`}>
            {
                loading ?
                    <div
                        className={'w-full h-full flex justify-center items-center '}>
                        <Loading {...loadingProps} />
                    </div>
                    :
                    <>
                        {error ?
                            <div
                                className={`px-4 md:px-12 lg:px-24 flex w-full h-full justify-center items-center ${errorProps?.fullScreen && 'h-screen'}`}>
                                <ErrorAlert
                                    className={errorProps?.className}
                                    isShown={error}
                                />
                            </div>


                            :
                            (data && children)
                        }
                    </>
            }
        </AnimatedDiv>

    )
}


export default ContentController

