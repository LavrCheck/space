import './BasketContents.sass';
import { ListUnit } from '../ListUnit';
import { useState } from 'react';

export function BasketContents({
  selectedAsteroids,
}: {
  selectedAsteroids: object[];
}) {
  const [asteroids, setAsteroids] = useState(selectedAsteroids);

  function Remove(index: number) {
    const updatedAsteroids = [...asteroids];
    updatedAsteroids.splice(index, 1);
    setAsteroids(updatedAsteroids);
  }

  return (
    <>
      <div className="BasketContents">
        {asteroids.map((x: any, index: number) => (
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