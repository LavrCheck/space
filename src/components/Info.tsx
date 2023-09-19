import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getUnit } from "../api"
import { convertDate } from "./AsteroidsList"
import { convertLunar } from "./AsteroidsList"
import { InfoUnit } from "./InfoUnit"
import './Info.sass'
import { DiameterSelection } from "./DiameterSelection"

export function Info() {

    let { id }: any = useParams()
    let [allInfo, setAllInfo] = useState<any[]>([])

    function convertAllInfo(data: any): any {
        return data.close_approach_data.flat().map((x: any) => {
            return {
                date: convertDate(x.close_approach_date_full).split(' ').splice(0, 3).join(' '),
                speed: Number(x.relative_velocity.kilometers_per_hour).toLocaleString() + ' км/ч',
                orbit: convertOrbit(x.orbiting_body),
                distanceKm: Number(x.miss_distance.kilometers.split('.')[0]).toLocaleString() + ' км',
                distanceLun: convertLunar(Number(x.miss_distance.lunar.split('.')[0])),
            }
        })
    }

    useEffect(() => {
        getUnit(id).then((data)=> {setAllInfo((convertAllInfo(data)))})
    }, [id])

    function convertOrbit(data: string) {
        return data.replace('Merc', 'Меркурий')
            .replace('Venus', 'Венера')
            .replace('Earth', 'Земля')
    }



    let [isDistance, setIsDistance] = useState(true)


    return <>
        <div className="Info">
            <DiameterSelection 
                Change={(b) => setIsDistance(b)}
                isDistance={isDistance}
                name="Ближайшие сближения астероида"
            />
            <div className="unitsContainer">
                {
                    allInfo.map((x) =>{
                    return <InfoUnit
                    date={x.date}
                    distance={isDistance ? x.distanceKm : x.distanceLun}
                    orbit={x.orbit}
                    speed={x.speed} 
                    />})
                }
            </div>
        </div>
    </>

}