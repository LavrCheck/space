import React,{ CSSProperties } from 'react'
import './Button.sass'

export const Button = (
    {
        children,
        style,
        onCLick,
        big = false,
    } : {
        children: string
        style?: CSSProperties
        onCLick?: any
        big?: boolean
    }
) =>
    <button className={`Button ${big ? 'big' : ''}`} style={style} onClick={onCLick}>{children}</button>