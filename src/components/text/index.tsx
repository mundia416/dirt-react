import React from 'react';


export interface TextProps {
    testid?: string,
    /**
     * The type of the text
     */
    type?: 'text-extra-small' | 'text-small' | 'text' | 'text-large' | 'heading-small' | 'heading' | 'heading-medium' | 'heading-large',
    span?: boolean,
    className?: string,
    children?: any,
    color?: boolean,
    font?: boolean,
    textSize?: boolean,
    weight?: boolean,
    onClick?: () => void,
    id?: string
}

const Text: React.FC<TextProps> = ({
    id,
    testid,
    type = 'text',
    span = false,
    className,
    children,
    color = false,
    font = false,
    textSize = false,
    weight = false,
    onClick
}) => {

    const headingSmall = ` ${!textSize && 'text-lg md:text-xl'} ${!weight && 'font-bold'} tracking-tight ${!color && 'text-gray-700'} 
     `

    const heading = `${!color && 'text-gray-900'} tracking-tight ${!weight && 'font-extrabold'} ${!textSize && 'text-2xl md:text-3xl'} 
    `

    const headingMedium = `${!color && 'text-gray-900'}  ${!weight && 'font-extrabold'} tracking-tight
    ${!textSize && 'text-3xl md:text-4xl'} `

    const headingLarge = ` ${!color && 'text-gray-900'} tracking-tight ${!weight && 'font-black'} ${!textSize && 'text-4xl md:text-5xl'} 
    `

    const textExtraSmall = ` ${!textSize && 'text-xs'}  ${!color && 'text-gray-600'} `
    const textSmall = ` ${!textSize && 'text-sm'}   ${!color && 'text-gray-600'} `
    const text = ` ${!color && 'text-gray-600'}  ${!textSize && 'text-base'} `
    const textLarge = ` ${!color && 'text-gray-600'} ${!textSize && 'text-lg'}`


    let textStyle;

    switch (type) {
        case 'heading-small':
            textStyle = headingSmall
            break
        case 'heading':
            textStyle = heading
            break
        case 'heading-medium':
            textStyle = headingMedium
            break
        case 'heading-large':
            textStyle = headingLarge
            break
        case 'text-extra-small':
            textStyle = textExtraSmall
            break
        case 'text-small':
            textStyle = textSmall
            break
        case 'text-large':
            textStyle = textLarge
            break


        default:
            textStyle = text
            break
    }

    const styles = ` ${!font && 'font-sans'} ${textStyle} ${className}`

    return (
        span ?
            <span
                id={id}
                data-testid={testid}
                onClick={onClick}
                className={styles}>{children}</span>
            :
            (type === 'text' ?
                <p
                    id={id}
                    data-testid={testid}
                    onClick={onClick}
                    className={styles}>{children}</p>
                :
                <h3
                    id={id}
                    data-testid={testid}
                    onClick={onClick}
                    className={styles}>{children}</h3>)

    );
};


export default Text