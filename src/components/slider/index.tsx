import React from 'react'
import SliderComponent from 'react-input-slider';

type Props = {
    min: number
    max: number
    step: number
    onChange?: (value: number) => void
    value?: number
    thumbColor?: string
    activeColor?: string
}

function Slider({ min, max, step, onChange, value,
    thumbColor = '#00bcd4',
    activeColor = '#00acc1' }: Props) {
    return (
        <div className='w-full mb-2 py-2'>
            <SliderComponent
                axis='x'
                x={value}
                xmin={min}
                xmax={max}
                xstep={step}
                onChange={({ x }) => onChange && onChange(x)}

                styles={{
                    active: {
                        backgroundColor: activeColor
                    },
                    thumb: {
                        width: 28,
                        height: 28,
                        border: `1px solid ${thumbColor}`,
                    },
                    track: {
                        width: '100%'
                    }


                }}
            />
        </div>
    )
}


export default Slider

