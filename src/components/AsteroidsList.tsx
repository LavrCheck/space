import React, {useState, useEffect} from "react";
import example from '../exemjopa.json'
import { getList } from '../api'
import { ListUnit } from "./ListUnit";
import './AsteroidList.sass'

const convertList = (data: any): any[] => {
    return Object.values(data.near_earth_objects).flat().map((x: any) => {
      return {
        name: x.name,
        diameter: Math.floor(x.estimated_diameter.meters.estimated_diameter_max),
        isDangerous: x.is_potentially_hazardous_asteroid,
        lunar: x.close_approach_data[0].miss_distance.lunar.split('.')[0],
        kilometers: x.close_approach_data[0].miss_distance.kilometers.split('.')[0],
        maxApproachDate: convertDate(x.close_approach_data[0].close_approach_date_full.split(' ')[0])
      }
    })
  }
  
  const convertDate = (date: string) => {
    return date.replace('-Jan-', ' Янв ')
      .replace('-Feb-', ' Фев ')
      .replace('-Mar-', ' Март ')
      .replace('-Apr-', ' Апр ')
      .replace('-May-', ' Май ')
      .replace('-Jun-', ' Июнь ')
      .replace('-Jul-', ' Июль ')
      .replace('-Aug-', ' Авг ')
      .replace('-Sep-', ' Сен ')
      .replace('-Oct-', ' Окт ')
      .replace('-Nov-', ' Нояб ')
      .replace('-Dec-', ' Дек ')
  }

export function AsteroidsList () {

    let [asteroids, setAsteroids] = useState<any[]>([])

    let end = new Date()
    let start = new Date()
    end.setDate(end.getDate() - 6)
  
  
    useEffect(() => {
      (async () => {
        //let date = await getList(end, start)
        setAsteroids(convertList(example))
      })()
    }, [example])
  
  
    console.log(asteroids[1])
  
    return (
        <div className='AsteroidsList'>
          {asteroids.map((x: any) => <ListUnit
            date={x.maxApproachDate} 
            distance={x.kilometers}
            name={x.name}
            size={x.diameter}
            />)}
        </div>
    )

}