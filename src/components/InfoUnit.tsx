import './InfoUnit.sass'
import arrow from '../Images/arrow.svg'
import speedSvg from '../Images/speed.svg'

export function InfoUnit({
    orbit,
    date,
    distance,
    speed,
}: {
    orbit: string
    date: string
    distance: string
    speed: string
}) {


    return <>
        <div className="InfoUnit">
            <h1>{orbit}</h1>
            <div className='middleInfo'>
                <p>{date}</p>
                <img src={arrow} alt='arrow' />
                <p>{distance}</p>
            </div>
            <div className='botInfo'>
                <img src={speedSvg} alt='speed' />
                <p>{speed}</p>
            </div>
        </div>
    </>
}