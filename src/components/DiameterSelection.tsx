import { useEffect, useState } from 'react'
import './DiameterSelection.sass'

export function DiameterSelection({
    isDistance,
    Change,
    }:{
    isDistance : boolean
    Change: any
    }){ 

    const selectedStyle = {fontWeight: '700', textDecoration: 'unset'} 

    return <>
    <div className='DiameterSelection'>
        <h1>Ближайшие подлеты астероидов</h1>
        <div className='spanContainer'>
            <span style={isDistance ? selectedStyle : {}} onClick={()=> Change(true)}>В километрах</span>
            <p>|</p>
            <span style={!isDistance ? selectedStyle : {}} onClick={()=> Change(false)}>В лунных орбитах</span>
        </div>
    </div>
    </>
}