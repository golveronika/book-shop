import React from 'react'
import Icon_delete from '../../../img/cross.svg'
import { roundCost } from '../../utils' 

const Cart = ({cartVisible, cart, exchange, handleAddToCart, handleDelFromCart}) => {

    const handleCountChange = (event, item) => {
        handleAddToCart(item, item.max_count, parseInt(event.target.value))
    }

    if (cartVisible)
    return (
        <div className="cart cart__open">
            <div className="cart__container">
                <div className="cart__container__title">
                    Корзина
                </div>
                <div className="cart__table">

                    <div className="cart__table_row-title">
                        <div className="cart__table__title">Наименование</div>
                        <div className="cart__table__title">Количество</div>
                        <div className="cart__table__title">Цена</div>
                        <div className="cart__table__title"></div>                        
                    </div>

                    {cart.articles.map(item => (
                            <div className="cart__table_row" key={`cart_${item.id}`}>
                                <div className="cart__table__col">
                                    {item.name}
                                </div>
                                <div className="cart__table__col">
                                    <input 
                                        className="cart__table__col__count" 
                                        type="number" 
                                        min="1" 
                                        max={item.max_count} 
                                        defaultValue={item.count}
                                        onChange={(event) =>  handleCountChange(event, item)}
                                    /> шт.
                                </div>
                                <div className="cart__table__col">
                                    <b>{`${roundCost(item.price * exchange.cost)} руб./`}шт.</b>
                                </div>
                                <div className="cart__table__col">
                                    <a href="#" onClick={() => handleDelFromCart(item.id)}><Icon_delete /></a>
                                </div>                        
                            </div>
                        )
                    )}
                                 
                </div>

                <div className="cart__container__summary">
                    <span>Общая стоимость:  <b>{roundCost(cart.summary * exchange.cost)} руб.</b></span>
                </div>
                
            </div>
    
        </div>
    )
    
    if (!cartVisible) return (<div className="cart cart__close"></div>)
}

export default Cart;
