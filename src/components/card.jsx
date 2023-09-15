import React, { useEffect } from 'react'
import '../scss/card/index.css'
import { useDispatch, useSelector } from 'react-redux'
import { getCartProductsSuccess } from '../slice/cart'

function Card({card}) {
  const dispatch = useDispatch()
  const {products} = useSelector(state => state.products)
  const {cartProducts} = useSelector(state => state.cart)
  const {title, description, price, id, img} = card

  
  const addToCart = (id) => {
    const allProducts = [...products]
    let newCartProduct = allProducts.find((item) => item.id === id)
    if(!cartProducts.find(item => item.id === id)){
      const newCart = [...cartProducts]
      newCartProduct = {...newCartProduct, quantity: 1};
      newCart.push(newCartProduct)
      dispatch(getCartProductsSuccess(newCart))
    }
  }

  return (
    <div className='card'>
      <div className='card-img'>
        <img className= 'img' src={img} alt="card-img" />
      </div>
      <div className='card-body'>
        <div className='card-body__description'>
          <h2 className='card__title'>{title}</h2>
          <p className='card__description'>{description}</p>
        </div>
        <div className='card-body__bottom'>
            <p className='card__price'>{price} сум</p>
            <button onClick={() => addToCart(id)} className='card-body__bottom__button'>+ добавить</button>
        </div>
        
        
      </div>
    </div>
  )
}

export default Card