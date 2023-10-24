import React, { useState, useEffect, useRef, CSSProperties } from "react"
import { getList } from '../api'
import { ListUnit } from "./ListUnit"
import './AsteroidList.sass'
import { useNavigate } from "react-router-dom"
import loadingGif from '../Images/loading.gif' 


export type asteroids = {
  name: string
  diameter: number
  isDangerous: boolean
  lunar: string
  kilometers: string
  maxApproachDate: string
  id: number
}

const convertList = (data: any): asteroids[] => {
  return Object.values(data.near_earth_objects).flat().map((x: any) => {
    return {
      name: x.name,
      diameter: Math.floor(x.estimated_diameter.meters.estimated_diameter_max),
      isDangerous: x.is_potentially_hazardous_asteroid,
      lunar: convertLunar(Number(x.close_approach_data[0].miss_distance.lunar.split('.')[0])),
      kilometers: Number(x.close_approach_data[0].miss_distance.kilometers.split('.')[0]).toLocaleString() + ' км',
      maxApproachDate: convertDate(x.close_approach_data[0].close_approach_date_full.split(' ')[0]),
      id: x.id
    }
  })
}

export const convertLunar = (number: number) => {
  const lastDigit = number % 10;
  const lastTwoDigits = number % 100;

  if (
    (lastTwoDigits >= 11 && lastTwoDigits <= 19) ||
    lastDigit === 0 ||
    (lastDigit >= 5 && lastDigit <= 9)
  ) {
    return `${number} лунных орбит`
  } else if (lastDigit === 1) {
    return `${number} лунная орбита`
  } else {
    return `${number} лунные орбиты`
  }
}

export const convertDate = (date: string) => {
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

const sortConvertDate = (date: string) => {
  return date.replace(' Янв ', '/01/')
    .replace(' Фев ', '/02/')
    .replace(' Март ', '/03/')
    .replace(' Апр ', '/04/')
    .replace(' Май ', '/05/')
    .replace(' Июнь ', '/06/')
    .replace(' Июль ', '/07/')
    .replace(' Авг ', '/08/')
    .replace(' Сен ', '/09/')
    .replace(' Окт ', '/10/')
    .replace(' Нояб ', '/11/')
    .replace(' Дек ', '/12/')
}

const styleForLoading : CSSProperties = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
}



export function AsteroidsList({
  isDistance,
  selected,
  selectedAsteroids,
  isAsteroids,
}: {
  isDistance: boolean
  selected: (data: asteroids) => void
  selectedAsteroids: asteroids[]
  isAsteroids: (data: boolean) => void
}) {

  const [asteroids, setAsteroids] = useState<asteroids[]>([])
  isAsteroids( asteroids.length === 0)

  const startDate = new Date()
  const endDate = new Date()
  endDate.setDate(endDate.getDate() + 3)

  let scrollHandlerLock = useRef(false)
  useEffect(() => {
    const handleScroll = async () => {

      if (scrollHandlerLock.current) {
        return
      }
      scrollHandlerLock.current = true

      let scrollHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
      )

      const scrolledUntilEnd = (window.innerHeight + window.pageYOffset) >= scrollHeight - 100
      console.log(scrolledUntilEnd)
      if (scrolledUntilEnd) {
        startDate.setDate(startDate.getDate() + 3)
        endDate.setDate(endDate.getDate() + 3)
        const data = await getList(startDate, endDate)
        setAsteroids(prevAster => [...prevAster, ...convertList(data)])
      }

      scrollHandlerLock.current = false
    }
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  })

  useEffect(() => {
    (async () => {
      let data = await getList(startDate, endDate)
      setAsteroids(convertList(data))
    })()
  },[])

  const navigate = useNavigate()

  asteroids.sort((x, y) => {
    const dateX = new Date(sortConvertDate(x.maxApproachDate))
    const dateY = new Date(sortConvertDate(y.maxApproachDate))
    return dateX.getTime() - dateY.getTime()
  })
  
  

  return (
    <div className='AsteroidsList'>
      {
        asteroids.map((x: asteroids) => (
          <ListUnit
            key={x.id}
            date={x.maxApproachDate}
            distance={isDistance ? x.kilometers : x.lunar}
            name={x.name}
            size={x.diameter}
            isAlarm={x.isDangerous}
            choice={() => selected(x)}
            childrenButton={'ЗАКАЗАТЬ'}
            isAsteroidSelected={selectedAsteroids.some(
              (a: { name: string }) => a.name === x.name
            )}
            goInfo={() => navigate(`/info/${x.id}`)}
          />
        ))
      }
      <img src={loadingGif} alt="loading" className="loading" style={asteroids.length === 0 ? styleForLoading : {}}/>
    </div>
  )

}


