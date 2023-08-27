import './Basket.sass'
import { Button } from '../ui/Button'

export function Basket () {
    return <>
        <div className="Basket">
            <div>
                <h2>Корзина</h2>
                <p>2 товара</p>
            </div>
        <Button big={true}>В корзину</Button>
        </div>    
    </>
}