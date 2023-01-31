import React from 'react';
import './styles.css';
import './carrito.png';

const CartWidget = () => {
    return(
        <div id="compra">
            <ul>
            <li className='carro'><div id='cart'></div></li>
            <li className='carro'><div id='cantidad'>0</div></li>
            </ul>
        </div>

    )
}

export default CartWidget;