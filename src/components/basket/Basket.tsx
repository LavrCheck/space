import './Basket.sass'
import { Button } from '../ui/Button'
import { Link } from 'react-router-dom'

export function Basket ({
    selectedAsteroids,
}:{
    selectedAsteroids: any
}) {
    function getCorrectForm(number: number) {
        if (number === 0) {
          return "0 товаров";
        } else if (number % 100 >= 11 && number % 100 <= 19) {
          return number + " товаров";
        } else if (number % 10 === 1) {
          return number + " товар";
        } else if (number % 10 >= 2 && number % 10 <= 4) {
          return number + " товара";
        } else {
          return number + " товаров";
        }
      }
    return <>
        <div className="Basket">
            <div>
                <h2>Корзина</h2>
                <p>{getCorrectForm(selectedAsteroids.length)}</p>
            </div>
        <Link to='/basket'> <Button big={true}>В корзину</Button> </Link>
        </div>    
    </>
}