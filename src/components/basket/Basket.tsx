import './Basket.sass'
import { Button } from '../ui/Button'
import { Link } from 'react-router-dom'

export function Basket () {
    return <>
        <div className="Basket">
            <div>
                <h2>Корзина</h2>
                <p>2 товара</p>
            </div>
        <Link to='/basket'> <Button big={true}>В корзину</Button> </Link>
        </div>    
    </>
}