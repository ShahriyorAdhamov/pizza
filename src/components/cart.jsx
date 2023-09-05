import React from 'react'
import axios from '../axios/index'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCartProductsSuccess } from '../slice/cart'
import CartProduct from './cart-product'
import '../scss/cart/cart.css'

function Cart() {
  const {cartProducts} = useSelector(state => state.cart)
  const dispatch = useDispatch()

  return (
    <div className="cart">
      <div className='cart-products'>
        { cartProducts.length? cartProducts.map((item) => (
          <CartProduct product = {item}/>
        )): 'пусто'}
      </div>
      <div className='cartPrice'>
        <h2>Total price:</h2>
        <h4>
          {cartProducts.map((item) => (
          item.quantity * item.price
          )).reduce((acc, item) => acc + item, 0)}
        </h4>
      </div>
    </div>

  )
}

export default Cart

