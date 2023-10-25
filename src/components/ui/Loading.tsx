import { CSSProperties } from 'react'
import loadingSvg from '../../Images/loading.svg'
import './Loading.sass'



const styleForLoading: CSSProperties = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
}



export const Loading = ({
    style,
    isCenter = false
}: {
    style?: CSSProperties
    isCenter?: boolean
}) => {

    if (isCenter) { style = { ...style, ...styleForLoading } }

    return <img src={loadingSvg} alt='Loading...' style={style} className='Loading' />
}