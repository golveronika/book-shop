import React from 'react'
import Icon_cart from '../../../img/shopping-cart.svg' 
//import Icon_loupe from '../../../img/loupe.svg' 

const Header = ({setCartVisible, cartVisible, cart}) => {

  return (
    <header className="header-page">

        <div className="logo"><a className="logo__link" href="/">SHOPPING PAGE</a></div>

        <div className="cart-container">

            {/* <div className="cart-container__search">
                <input className="cart-container__search__input" type="text"/>  
                <div className="cart-container__search__icon">
                    <Icon_loupe />
                </div>                
            </div> */}

            <div className="cart-container__cart" onClick={() => setCartVisible(!cartVisible)}>
                <Icon_cart />
                {(cart.count > 0) ? (<div className="cart-container__counter"> {cart.count}</div>) : ('')}
            </div>
        </div>

    </header>
  );
}

export default Header;
