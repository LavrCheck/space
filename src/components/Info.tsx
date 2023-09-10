import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getUnit } from "../api"
import jInfo from '../info.json'
import { convertDate } from "./AsteroidsList"
import { convertLunar } from "./AsteroidsList"
import { InfoUnit } from "./InfoUnit"

export function Info () {

    let {id}:any = useParams()
    let [allInfo, setAllInfo] = useState<any[]>([])

    function convertAllInfo(data:any): any[] {
        return data.close_approach_data.flat().map((x:any)=>{
            return {
                date: convertDate(x.close_approach_date_full),
                speed: Number(x.relative_velocity.kilometers_per_hour).toLocaleString() + 'км/ч',
                orbit: convertOrbit(x.orbiting_body),
                distanceKm: Number(x.miss_distance.kilometers.split('.')[0]).toLocaleString() + ' км',
                distanceLun: convertLunar(Number(x.miss_distance.lunar.split('.')[0])),
            }
        })
    }

    useEffect(()=>{
        // getUnit(id).then((data)=> {})
        setAllInfo(convertAllInfo(jInfo))
    },[jInfo])

    function convertOrbit (data:string) { 
        return data.replace('Merc', 'Меркурий')
        .replace('Venus', 'Венера')
        .replace('Earth', 'Земля')
    }


    return <>
            <InfoUnit/>
            {
                allInfo.map((x)=> <p>{x.date} | {x.speed} | {x.orbit} | {x.distanceKm} | {x.distanceLun}</p>)
            }
        </>
    
}