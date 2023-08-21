import React,{ CSSProperties } from 'react'
import './Button.sass'

export const Button = (
    {
        children,
        style,
        onCLick,
    } : {
        children: any
        style?: CSSProperties
        onCLick?: any
    }
) =>
    <button className={`Button`} style={style} onClick={onCLick}>{children}</button>