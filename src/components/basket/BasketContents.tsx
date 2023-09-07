import './BasketContents.sass';
import { ListUnit } from '../ListUnit';
import { Button } from '../ui/Button';

export function BasketContents({
  selectedAsteroids,
  remove,
  isDistance,
  sendOrder,
}: {
  selectedAsteroids: object[];
  remove: any
  isDistance: boolean
  sendOrder: ()=> void
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
        <div className='buttonsContainer'>
          <Button big={true} onClick={sendOrder}>Отправить</Button>
        </div> 
      </div>
    </>
  );
}