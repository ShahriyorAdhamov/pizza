import React from 'react'
import {useDispatch}from 'react-redux'
import { addQuantity, subQuantity } from '../slice/cart'


function CartProduct({product}) {
    const dispatch = useDispatch();
    const {id, img, title, price, quantity} = product


    
    const changeQuantity = (e, id) => {
      if(e ==='+') {
        dispatch(addQuantity(id))
      }else {
        dispatch(subQuantity(id))
      }
    }
  return (
    <div key={id} className='cart-product'>
        <img src={img} alt="pizza" className='cart-product__image' />
        <h2>{title}</h2>
        <p>{price}</p>
        <div className='change-quantity'>
          <button onClick={() => changeQuantity('+', id)}>+</button>
          <p>{quantity}</p>
          <button onClick={() => changeQuantity('-', id)}>-</button>
        </div>

    </div>
  )
}

export default CartProduct