import React from 'react';
import './Cart.css'

const Cart = ({player, removeCart}) => {
     const {idPlayer, strPlayer} = player
     console.log(idPlayer)
    return (
        <div className='cart-details'>
            <h3>
                Name: {strPlayer}
            </h3>
                <button className='button' onClick={() => removeCart(idPlayer)}>Remove</button>
        </div>
    );
};

export default Cart;