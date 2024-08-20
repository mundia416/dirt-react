export interface AlertProps {
    isShown?: boolean
    variant: 'warning' | 'error' | 'success' | 'info'
    link?: { title: string, url: string },
    title?: string,
    content?: string,
    onPositiveClick?: () => void,
    onNegativeClick?: () => void,
    positiveText?: string,
    negativeText?: string,
    onCloseComplete?: () => void,
    className?: string,
    showDismiss?: boolean

}