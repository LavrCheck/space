import { CSSProperties } from 'react'
import loadingSvg from '../../Images/loading.svg'
import './Loading.sass'



export const Loading = ({
    style,
    isCenter = false
}: {
    style?: CSSProperties
    isCenter?: boolean
}) => {
    return <img src={loadingSvg} alt='Loading...' style={style} className={`Loading ${isCenter ? 'isCenter' : ''}`} />
}