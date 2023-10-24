import './DiameterSelection.sass'

export function DiameterSelection({
    isDistance,
    Change,
    name = 'Ближайшие подлеты астероидов',
    isDiameterHidden
}: {
    isDistance?: boolean
    Change: (value: boolean) => void
    name?: string
    isDiameterHidden?: boolean
}) {

    const selectedStyle = { fontWeight: '700', textDecoration: 'unset' }

    if(isDiameterHidden){return <></>}

    return <>
        <div className='DiameterSelection'>
            <h1>{name}</h1>
            <div className='spanContainer'>
                <span style={isDistance ? selectedStyle : {}} onClick={() => Change(true)}>В километрах</span>
                <p>|</p>
                <span style={!isDistance ? selectedStyle : {}} onClick={() => Change(false)}>В лунных орбитах</span>
            </div>
        </div>
    </>
}