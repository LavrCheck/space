import './BasketContents.sass';
import { ListUnit } from '../ListUnit';
import { useState } from 'react';

export function BasketContents({
  selectedAsteroids,
  remove,
  isDistance,
}: {
  selectedAsteroids: object[];
  remove: any
  isDistance: boolean
}) {



  return (
    <>
      <div className="BasketContents">
        {selectedAsteroids.map((x: any,) => (
          <ListUnit
            date={x.maxApproachDate}
            distance={isDistance ? x.kilometers : x.lunar}
            name={x.name}
            size={x.diameter}
            isAlarm={x.isDangerous}
            choice={() => remove(x.name)}
            active={false}
            childrenButton={'УДАЛИТЬ'}            
          />
        ))}
      </div>
    </>
  );
}