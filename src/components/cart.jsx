import React from 'react'
import {useSelector } from 'react-redux'
import CartProduct from './cart-product'
import '../scss/cart/cart.css'
import { useNavigate } from 'react-router-dom'

function Cart() {
  const {cartProducts} = useSelector(state => state.cart);
  const navigate = useNavigate();

  return (
    <div className="cart">
      <div className='cart-products'>
        { cartProducts.length? cartProducts.map((item) => (
          <CartProduct product = {item}/>
        )): 
        <div className='empty'>
          <img src='/image/3144456.png' alt='img'/>
          <button onClick={() => navigate('/')} className='back-button'>Назад</button>
        </div>
        }
      </div>
        
      <div className='cartPrice'>
        <h2>Total price:</h2>
        <h4>
          {cartProducts.map((item) => (
          item.quantity * item.price
          )).reduce((acc, item) => acc + item, 0)}
        </h4>
        <button className='next-button'>next</button>
      </div>
      
    </div>

  )
}

export default Cart

