import React,{ CSSProperties } from 'react'
import './Button.sass'

export const Button = (
    {
        children,
        style,
        onClick,
        big = false,
        disabled = false,
    } : {
        children: string
        style?: CSSProperties
        onClick?: any
        big?: boolean
        disabled?: boolean
    }
) =>
    <button className={`Button ${big ? 'big' : ''}`} style={style}
     onClick={onClick} disabled={disabled}>{children}</button>