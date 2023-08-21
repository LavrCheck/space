import './ListUnit.sass'
import arrow from '../Images/arrow.svg'
import asteroidSvg from '../Images/asteroid.svg'
import {Button} from '../components/ui/Button'
import alarmSvg from '../Images/alarm.svg'

export function ListUnit({
    date,
    distance,
    name,
    size,
}:{
    date: string
    distance: number
    name: string
    size: number
}) {
    return <>
        <div className='ListUnit'>
            <h3>{date}</h3>
            <div className='MiddleInfo'>
                <div className='MiddleLeft'>
                    <p>{distance}</p>
                    <img src={arrow} alt='arrow' />
                </div>
                <div className='AsteroidDiv'>
                    <img src={asteroidSvg} alt='asteroid' />
                </div>
                <div className='MiddleRight'>
                    <h4>{name}</h4>
                    <h5>Ø {size} м</h5>
                </div>
            </div>
            <div className='BottomInfo'>
                <Button>ЗАКАЗАТЬ</Button>
                <img src={alarmSvg} alt='alarm'/>
            </div>
        </div>
    </>
}

// <h5>Ø 225 м</h5>