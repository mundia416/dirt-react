import React, { useEffect } from 'react'
import TimeZone from 'react-timezone-select'
import timezoneUtils from '../../utils/timezone-utils'
import Label from '../label'
import { Controller, Control, FieldValues } from "react-hook-form";


type Props = {
    label?: string
    showLabel?: boolean
    value?: string
    onChange?: (timezone: string) => void
    disabled?: boolean
    formProps?: {
        //control from react hook forms useForm()
        control: Control<FieldValues, any>
        name: string
    }
}

export default function TimezoneSelect(props: Props) {
    if (props.formProps) {
        return <Controller
            name={props.formProps.name}
            control={props.formProps.control}
            render={({ field }) => (
                <TimezoneSelectContent
                    {...props}
                    value={field.value}
                    onChange={field.onChange}
                />
            )}
        />
    } else {
        return <TimezoneSelectContent {...props} />
    }
}

function TimezoneSelectContent({
    value,
    onChange,
    showLabel = true,
    label = "Timezone",
    disabled
}: Props) {

    useEffect(() => {
        if (!value) {
            onChange && onChange(timezoneUtils.getDefaultTimezone())
        }
    }, [])

    return (
        <div>
            {showLabel &&
                < div className='w-full flex justify-between mb-2'>
                    <Label>{label}</Label>
                </div>
            }

            <TimeZone
                isDisabled={disabled}
                value={value || timezoneUtils.getDefaultTimezone()}
                onChange={timezone => onChange && onChange(timezone.value)}
            />
        </div>
    )
}


