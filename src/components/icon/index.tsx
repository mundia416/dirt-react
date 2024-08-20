import React from 'react';
import PropTypes from 'prop-types';
import Spinner from 'react-spinkit'
import Wrapper from '../wrapper';


export interface Props{
    onClick?: (e: any) => void,
    hasBackground?: boolean,
    src: any,
    className?: string,
    round?: boolean,
    loading?: boolean,
    png?: boolean
}

const Icon = ({ onClick, hasBackground, src, className, round, loading, png}: Props) => {

    return (
        <>
            {loading ?
                <Wrapper className={className}>

                    <Spinner name="pulse" color="steelblue" />

                </Wrapper>
                :
                <div
                    onClick={(e) => {
                        if (onClick) {
                            e.stopPropagation()
                            onClick(e)
                        }
                    }}
                    className={`flex-shrink-0 ${'flex justify-center items-center'} ${'text-gray-800'} 
            ${'w-10 h-10 p-2'} ${hasBackground && 'bg-gray-200'} 
            ${ (round ? 'rounded-full' : 'rounded-lg')} ${className}`}>
                    {png ?
                        <img
                            className='w-full h-full'
                            src={src}
                            />
                        :

                        src
                    }
                </div>
            }
        </>
    );
};

const tailwindProps = {
    rounded: false,
    color: false,
    size: false,
}

export const defaultProps = {
    ...tailwindProps,
    round: true,
    hasBackground: true,
    png: false,
    alt: '',
    loading: false,
    loadingId: 'button-loading'
}

export const propTypes = {
    /** icon should be an svg ReactComponent, pass it as i.e <CheckedSVG/> */
    src: PropTypes.object.isRequired,
};

Icon.defaultProps = defaultProps

Icon.propTypes = propTypes

export default Icon;