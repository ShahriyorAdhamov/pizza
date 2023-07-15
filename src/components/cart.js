import React from 'react'
import axios from '../axios/index'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCartProductsSuccess } from '../slice/cart'
import CartProduct from './cart-product'

function Cart() {
  // const [totalPrice, setTotalPrice] = useState(0)
  const {cartProducts} = useSelector(state => state.cart)
  const dispatch = useDispatch()
  useEffect(() => {
    axios.get('/cart').then(({data}) => {
      dispatch(getCartProductsSuccess(data))
    })
  },[])

  return (
    <div className="cart">
      <div className='cart-products'>
        { cartProducts.map((item) => (
          <CartProduct product = {item}/>
        ))}
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