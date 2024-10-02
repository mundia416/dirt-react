const getCurrentMonth = () => {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const date = new Date();
    return monthNames[date.getMonth()]
}

/**
 * format a date to string
 */
const formatDate = ({ date, long = true }: { date: Date, long?: boolean }) => {
    if (date) {
        return date.toLocaleDateString(undefined, { year: 'numeric', month: long ? 'long' : 'short', day: 'numeric' })
    } else {
        return null
    }
}


/**
 * converts a date into the javascript runtime standard format  
 */
const toStandardDate = (date: Date) => {
    if (date) {

        let dateParam

        if (date.getTimezoneOffset) {
            dateParam = date.getTime() - (date.getTimezoneOffset() * 60000)
        } else {
            dateParam = date.getTime()
        }

        const dateString = new Date(dateParam)
            .toISOString()
            .split("T")[0];

        return dateString
    }
    return ''
}

export default {
    toStandardDate,
    formatDate,
    getCurrentMonth
}