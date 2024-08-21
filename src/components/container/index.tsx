import React from 'react';

type Props = {
    className?: string,
    narrow?: boolean,
    children?: any,
    onClick?: () => void
}

export default function Container({
    className,
    narrow = false,
    children,
    onClick
}: Props) {
    return (
        <div
            onClick={onClick}
            className={`w-full px-6 py-6 ${narrow ? 'md:px-24 lg:px-48 xl:px-64' : 'md:px-6'} ${className}`}>

            {children}

        </div>
    );
};