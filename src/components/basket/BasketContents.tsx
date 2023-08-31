import './BasketContents.sass';
import { ListUnit } from '../ListUnit';
import { useState } from 'react';

export function BasketContents({
  selectedAsteroids,
  remove
}: {
  selectedAsteroids: object[];
  remove: any
}) {



  return (
    <>
      <div className="BasketContents">
        {selectedAsteroids.map((x: any, index: number) => (
          <ListUnit
            date={x.maxApproachDate}
            distance={x.kilometers}
            name={x.name}
            size={x.diameter}
            isAlarm={x.isDangerous}
            choice={() => remove(x.name)}
          />
        ))}
      </div>
    </>
  );
}