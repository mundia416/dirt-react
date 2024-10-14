import React from 'react';
import {
    Audio, Oval, ThreeDots, ThreeCircles, Puff, Watch,
    BallTriangle, Bars, FallingLines, Grid,
    InfinitySpin, LineWave,
    TailSpin, RotatingLines, RotatingSquare, Rings, RevolvingDot, Radio
} from 'react-loader-spinner'

export interface LoadingProps {
    className?: string,
    fullScreen?: boolean,
    size?: 'tiny' | 'extra-small' | 'small' | 'medium' | 'large'
    variant?: 'audio' | 'ball-triangle' | 'bars' |
    'falling-lines' | 'grid' | 'infinity-spin' | 'line-wave' |
    'oval' | 'puff' | 'watch' | 'three-dots' |
    'three-circles' | 'tailspin' | 'rotating-lines' | 'rotating-square' | 'rings' | 'revolving-dot' | 'radio'

    /** a color code */
    color?: string
}

const Loading: React.FC<LoadingProps> = ({
    variant = 'oval',
    size = 'medium',
    color = '#4fa94d',
    className,
    fullScreen }) => {

    let width = 80
    let height = 80
    let radius = 5

    switch (size) {
        case 'tiny':
            width = 15
            height = 15
            radius = 2
            break
        case 'extra-small':
            width = 30
            height = 30
            radius = 3
            break
        case 'small':
            width = 50
            height = 50
            radius = 3
            break
        case 'large':
            width = 150
            height = 150
            radius = 5
    }


    return (
        <div
            className={`w-full h-full flex ${fullScreen && 'w-screen h-screen'} items-center justify-center ${className}`}>

            {variant === 'tailspin' &&
                <TailSpin
                    height={height}
                    width={width}
                    color={color}
                    visible={true}
                />
            }
            {variant === 'rotating-lines' &&
                <RotatingLines
                    width={width.toString()}
                    visible={true}
                />
            }
            {variant === 'rotating-square' &&
                <RotatingSquare
                    height={height}
                    width={width}
                    color={color}
                    visible={true}
                />
            }
            {variant === 'rings' &&
                <Rings
                    height={height}
                    width={width}
                    color={color}
                    visible={true}
                />
            }
            {variant === 'revolving-dot' &&
                <RevolvingDot
                    height={height}
                    width={width}
                    color={color}
                    visible={true}
                />
            }
            {variant === 'radio' &&
                <Radio
                    height={height}
                    width={width}
                    visible={true}
                    colors={[color, color, color]}
                />
            }

            {variant === 'bars' &&
                <Bars
                    height={height}
                    width={width}
                    color={color}
                    visible={true}
                />
            }

            {variant === 'three-dots' &&
                <ThreeDots
                    height={height}
                    width={width}
                    color={color}
                    visible={true}
                />
            }


            {variant === 'three-circles' &&
                <ThreeCircles
                    height={height}
                    width={width}
                    color={color}
                    visible={true}
                />
            }

            {variant === 'watch' &&
                <Watch
                    height={height}
                    width={width}
                    color={color}
                    visible={true}
                />
            }


            {variant === 'puff' &&
                <Puff
                    height={height}
                    width={width}
                    color={color}
                    visible={true}
                />
            }

            {variant === 'oval' &&
                <Oval
                    height={height}
                    width={width}
                    color={color}
                    visible={true}
                />
            }

            {variant === 'audio' &&
                <Audio
                    height={height}
                    width={width}
                    color={color}
                    visible={true}
                />
            }

            {variant === 'line-wave' &&
                <LineWave
                    height={height * 1.2}
                    width={width * 1.2}
                    color={color}
                    visible={true}
                />
            }

            {variant === 'falling-lines' &&
                <FallingLines
                    width={width.toString()}
                    color={color}
                    visible={true}
                />
            }

            {variant === 'infinity-spin' &&
                <InfinitySpin
                    width={(width * 2).toString()}
                    color={color}
                />
            }


            {variant === 'grid' &&
                <Grid
                    height={height}
                    width={width}
                    color={color}
                    visible={true}
                />
            }


            {variant === 'ball-triangle' &&
                <BallTriangle
                    height={height}
                    width={width}
                    radius={radius}
                    color={color}
                    visible={true}
                />
            }

        </div>
    );
};



export default Loading;