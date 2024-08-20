import React from 'react';

type Props = {
    /**@deprecated use className */
    tailwind?: string,
    className?: string,
    narrow?: boolean,
    testId?: string,
    children?: any
}

export default function Container({
    tailwind,
    className,
    narrow = false,
    children,
    testId}: Props) {
  return (
        <div 
      
        data-testid={testId}
        className={`w-full px-6 py-6 ${narrow ? 'md:px-24 lg:px-48 xl:px-64' : 'md:px-6'}
         ${tailwind} ${className}`}>
            
            {children}

        </div>
    );
};