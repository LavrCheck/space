import React,{ CSSProperties } from 'react'
import './Button.sass'
import { useNavigate } from 'react-router-dom'
import backArrow  from '../../Images/backArrow.svg'




export const Button = (
    {
        children,
        style,
        onClick,
        big = false,
        disabled = false,
        small = false,
        isBackButton = false
    } : {
        children?: string
        style?: CSSProperties
        onClick?: any
        big?: boolean
        disabled?: boolean
        small?: boolean
        isBackButton?: boolean
    }
) => {

    const navigate = useNavigate()

    if (isBackButton) {onClick = () => navigate('/')}



    return (
    <button className={`Button ${big ? 'big' : ''} ${small ? 'small': ''} ${isBackButton ? 'isBack': ''}`} style={style}
     onClick={onClick} disabled={disabled}>{!isBackButton ? children : <img src={backArrow} alt='←'/>}</button>
)}