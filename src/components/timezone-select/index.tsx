import React from 'react'
import TimeZone from 'react-timezone-select'
import timezoneUtils from '../../utils/timezone-utils'
import Label from '../label'


type Props = {
    label?: string
    showLabel?: boolean
    selectedTimezone?: string
    onChange: (timezone: string) => void
}

function TimezoneSelect({
    selectedTimezone = timezoneUtils.getDefaultTimezone(),
    onChange,
    showLabel = true,
    label = "Timezone"
}: Props) {

    return (
        <div>
            {showLabel &&
                < div className='w-full flex justify-between mb-2'>
                    <Label>{label}</Label>
                </div>
            }

            <TimeZone
                value={selectedTimezone}
                onChange={timezone => onChange(timezone.value)}
            />
        </div>
    )
}

export default TimezoneSelect

