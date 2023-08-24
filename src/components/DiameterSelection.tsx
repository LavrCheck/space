import { useEffect, useState } from 'react'
import './DiameterSelection.sass'

export function DiameterSelection(){ 

    let [isState, setIsState] = useState(true)
    let [weightK, setWeightK]: any = useState({})
    let [weightL, setWeightL]: any = useState({})
    
    function kilometersChoice () : any {
        setIsState(true)
    }
    function lunarChoice() : any {
        setIsState(false)
    }

    useEffect(() => {
        if (isState) {setWeightK({fontWeight: '700', textDecoration: 'unset'}); setWeightL({})}
        else {setWeightL({fontWeight: '700', textDecoration: 'unset'}); setWeightK({})}
    }, [isState])

    return <>
    <div className='DiameterSelection'>
        <h1>Ближайшие подлеты астероидов</h1>
        <div className='spanContainer'>
            <span style={weightK} onClick={kilometersChoice}>В километрах</span>
            <p>|</p>
            <span style={weightL} onClick={lunarChoice}>В лунных орбитах</span>
        </div>
    </div>
    </>
}