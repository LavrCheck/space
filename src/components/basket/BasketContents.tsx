import './BasketContents.sass';
import { ListUnit } from '../ListUnit';
import { useState } from 'react';

export function BasketContents({
  selectedAsteroids,
}: {
  selectedAsteroids: object[];
}) {

  function Remove(index: number) {
    selectedAsteroids.splice(index, 1)
  }

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
            choice={() => Remove(index)}
          />
        ))}
      </div>
    </>
  );
}