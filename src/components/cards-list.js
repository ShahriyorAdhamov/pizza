import React, { useEffect } from 'react'
import Card from './card'
import '../scss/cards-list/index.css'
import axios from '../axios/index'
import {useDispatch, useSelector } from 'react-redux'
import { getProductsLoading, getProductsSuccess, getProductsFail } from '../slice/products'

function CardsList() {
  const dispatch = useDispatch()
  const {products} = useSelector(state => state.products)
  const {searchTxtProducts , searchTxt} = useSelector(state => state.search)
  
  let filteredProducts = products;
  if(searchTxt) {
    filteredProducts = searchTxtProducts
  }
  
 
  useEffect(() => {
    dispatch(getProductsLoading());
    axios.get('/products')
    .then(({data}) => {
      dispatch(getProductsSuccess(data))
    })
    .catch((err)=> {
      dispatch(getProductsFail(err))
    } )
  }, [])


  return (
    <div className='cards-list'>
      {filteredProducts.map((card) => (
        <Card
        key={card.id}
        card = {card}
        />
      ))}
    </div>
  )
}

export default CardsList