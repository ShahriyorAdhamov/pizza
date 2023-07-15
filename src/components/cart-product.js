import React from 'react'
import axios from '../axios/index'
import {useDispatch, useSelector}from 'react-redux'
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
        <img src={img} alt="image" className='cart-product__image' />
        <h2>{title}</h2>
        <p>{price}</p>
        <button onClick={() => changeQuantity('+', id)}>+</button>
        <p>{quantity}</p>
        <button onClick={() => changeQuantity('-', id)}>-</button>
    </div>
  )
}

export default CartProduct