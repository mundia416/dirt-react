const getDefaultTimezone = () => {
    return Intl.DateTimeFormat().resolvedOptions().timeZone
}

export default {
    getDefaultTimezone
}
