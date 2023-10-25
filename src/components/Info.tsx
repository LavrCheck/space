import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getUnit } from "../api"
import { convertDate } from "./AsteroidsList"
import { convertLunar } from "./AsteroidsList"
import { InfoUnit } from "./InfoUnit"
import './Info.sass'
import { DiameterSelection } from "./DiameterSelection"
import { Loading } from "./ui/Loading"



type info = {
    date: string
    speed: string
    orbit: string
    distanceKm: string
    distanceLun: string
}

function convertAllInfo(data: any): info[] {
    return data.close_approach_data.flat().map((x: any) => {
        return {
            date: convertDate(x.close_approach_date_full).split(' ').splice(0, 3).join(' '),
            speed: Math.floor(x.relative_velocity.kilometers_per_hour).toLocaleString() + ' км/ч',
            orbit: convertOrbit(x.orbiting_body),
            distanceKm: Math.floor(x.miss_distance.kilometers).toLocaleString() + ' км',
            distanceLun: convertLunar(Number(x.miss_distance.lunar.split('.')[0])),
        }
    })
}

function convertOrbit(data: string) {
    return data.replace('Merc', 'Меркурий')
        .replace('Venus', 'Венера')
        .replace('Earth', 'Земля')
        .replace('Moon', 'Луна')
        .replace('Juptr', 'Юпитер')
        .replace('Mars', 'Марс')
}



export function Info() {

    let { id }: any = useParams()
    const [allInfo, setAllInfo] = useState<info[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [isDistance, setIsDistance] = useState<boolean>(true)

    useEffect(() => {
        setIsLoading(true)
        getUnit(id).then((data) => { setAllInfo((convertAllInfo(data)))
        setIsLoading(false) })
    }, [id])

    if (isLoading) { return <Loading isCenter={true} /> }



    return <>
        <div className="Info">
            <DiameterSelection
                Change={(b) => setIsDistance(b)}
                isDistance={isDistance}
                name="Ближайшие сближения астероида"
            />
            <div className="unitsContainer">
                {allInfo.map((x) => {
                    return <InfoUnit
                        date={x.date}
                        distance={isDistance ? x.distanceKm : x.distanceLun}
                        orbit={x.orbit}
                        speed={x.speed}
                    />
                })}
            </div>
        </div>
    </>

}