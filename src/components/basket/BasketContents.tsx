import './BasketContents.sass'
import { ListUnit } from '../ListUnit'

export function BasketContents ({
    selectedAsteroids,
    }:{
    selectedAsteroids: any
    }) {
    return <>
        <div className="BasketContents">
            
          {selectedAsteroids.map((x: any) => <ListUnit
            date={x.maxApproachDate} 
            distance= {x.kilometers}
            name={x.name}
            size={x.diameter}
            isAlarm={x.isDangerous}
            />)}
            
        </div>
    </>
}