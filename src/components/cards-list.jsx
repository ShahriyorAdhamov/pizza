import React, { useEffect, useState } from 'react'
import Card from './card'
import '../scss/cards-list/index.css'
import { useDispatch, useSelector } from 'react-redux'
import Skeleton from './skeleton'
import { getProductsLoading } from '../slice/products'


function CardsList() {
  const dispatch = useDispatch()
  const {searchTxtProducts , searchTxt} = useSelector(state => state.search)
  const {isLoading, products} = useSelector(state => state.products)
  const [filteredProducts, setFilteredProducts] = useState([])



  useEffect(() => {
    setFilteredProducts([...products])
    if(searchTxt) {
      setFilteredProducts(searchTxtProducts)
    }
  }, [products, searchTxtProducts, searchTxt])

  
  return (
    <div className='cards-list'>
      {filteredProducts.map((card) => (
        isLoading? [...new Array(6)].map(() => <Skeleton/>) :<Card
        key={card.id}
        card = {card}
        />
      ))}
    </div>
  )
}

export default CardsList