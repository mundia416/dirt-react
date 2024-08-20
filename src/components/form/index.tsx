import React from 'react';

type Props = {
    onSubmit: () => void,
    children: any,
    id?: string,
    testid?: string,
    action?: string,
    method?: string,
    preventDefault?: boolean,
    /**@deprecated */
    tailwind?: string,
    className?: string
}

export default function Form({ onSubmit, children, id, testid, action, method, preventDefault = true, tailwind, className }: Props) {

    const handleSubmit = (e: any) => {
        preventDefault && e.preventDefault()
        onSubmit && onSubmit()
    }

    return (
        <form
            className={`${tailwind} ${className}`}
            method={method}
            action={action}
            id={id}
            onSubmit={handleSubmit}
            data-testid={testid}>
            {children}
        </form>
    );
};




