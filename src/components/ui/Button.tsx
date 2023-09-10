import React,{ CSSProperties } from 'react'
import './Button.sass'

export const Button = (
    {
        children,
        style,
        onClick,
        big = false,
        disabled = false,
        small = false,
    } : {
        children: string
        style?: CSSProperties
        onClick?: any
        big?: boolean
        disabled?: boolean
        small?: boolean
    }
) =>
    <button className={`Button ${big ? 'big' : ''} ${small ? 'small': ''}`} style={style}
     onClick={onClick} disabled={disabled}>{children}</button>