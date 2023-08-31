import './ListUnit.sass'
import arrow from '../Images/arrow.svg'
import asteroidSvg from '../Images/asteroid.svg'
import {Button} from '../components/ui/Button'
import alarmSvg from '../Images/alarm.svg'
import { CSSProperties, useState } from 'react'

export function ListUnit({
    date,
    distance,
    name,
    size,
    isAlarm,
    style,
    choice,
    active = true,
    childrenButton,
}:{
    date: string
    distance: number
    name: string
    size: number
    isAlarm: boolean
    style?: CSSProperties
    choice?: () => void
    active?: boolean
    childrenButton: any
}) {

    function isAsteroidBig (){
        if (size > 250) {return {height: '50px', width: '50px'}}
        else {return {}}
    }

    const [stateButton, setStateButton] = useState(false)
    // const [childrenButton, setChildrenButton] = useState('ЗАКАЗАТЬ')
    function activeButton () {
        if (!stateButton) {
            // setChildrenButton('В КОРЗИНЕ')
            setStateButton(!stateButton)
        }

    }


    return <>
        <div className='ListUnit'>
            <div className='TopInfo'>
            <h3>{date}</h3>
            { isAlarm &&
            <img className='Alarm' src={alarmSvg} alt='alarm'/>
            }
            </div>
            <div className='MiddleInfo'>
                <div className='MiddleLeft'>
                    <p>{distance}</p>
                    <img src={arrow} alt='arrow' />
                </div>
                <div className='AsteroidDiv'>
                    <img style={isAsteroidBig()} src={asteroidSvg} alt='asteroid' />
                </div>
                <div className='MiddleRight'>
                    <h4>{name}</h4>
                    <h5>Ø {size} м</h5>
                </div>
            </div>
            <div className='BottomInfo'>
            <Button onClick={() => { if (choice) { choice() } if(active) {activeButton()} }}
                disabled={stateButton}>{!stateButton ? childrenButton : 'В КОРЗИНЕ'}</Button>
            </div>
        </div>
    </>
} 

// <h5>Ø 225 м</h5> 
// <Button onClick={() => { if (choice) { choice() } activeButton() }}