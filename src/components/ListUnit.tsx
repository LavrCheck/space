import './ListUnit.sass'
import arrow from '../Images/arrow.svg'
import asteroidSvg from '../Images/asteroid.svg'

export function ListUnit() {
    return <>
        <div className='ListUnit'>
            <h3>12 сент 2023</h3>
            <div className='MiddleInfo'>
                <div className='MiddleLeft'>
                    <p>12 652 379 км</p>
                    <img src={arrow} alt='arrow' />
                </div>

                <div className='MiddleRight'>
                    <img src={asteroidSvg} alt='asteroid' />
                    <h4>2021FQ</h4>
                    <h5>234 M</h5>
                </div>
            </div>
        </div>
    </>
}