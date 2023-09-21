import './ListUnit.sass'
import arrow from '../Images/arrow.svg'
import asteroidSvg from '../Images/asteroid.svg'
import { Button } from '../components/ui/Button'
import alarmSvg from '../Images/alarm.svg'

export function ListUnit({
    date,
    distance,
    name,
    size,
    isAlarm,
    choice,
    childrenButton,
    isAsteroidSelected = false,
    goInfo,
}: {
    date: string
    distance: number
    name: string
    size: number
    isAlarm: boolean
    choice?: () => void
    active?: boolean
    childrenButton: string
    isAsteroidSelected?: boolean
    goInfo?: () => void
}) {

    function isAsteroidBig() {
        if (size > 250) { return { height: '50px', width: '50px' } }
        else { return {} }
    }


    return <>
        <div className='ListUnit'>
            <div className='TopInfo'>
                <h3>{date}</h3>
                {isAlarm &&
                    <img className='Alarm' title='Опасный' src={alarmSvg} alt='alarm' />
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
                <Button onClick={() => {
                    if (choice) { choice() }
                }}
                    disabled={isAsteroidSelected}>{!isAsteroidSelected ? childrenButton : 'В КОРЗИНЕ'}</Button>
                <Button small={true} onClick={goInfo}>?</Button>
            </div>
        </div>
    </>
}

