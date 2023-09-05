import React from 'react'
import CardsList from '../components/cards-list'
import Categories from '../components/categories'
import { getProductsLoading, getProductsSuccess, getProductsFail } from '../slice/products'
import { getCartProductsSuccess } from '../slice/cart'
import axios from '../axios/index'
import {useDispatch} from 'react-redux'
import { useEffect, useState } from 'react'
import Pagination from '../components/pagination'
function Main() {
  const [page, setPage] = useState(1);
  const [categoryActive, setCategoryActive]  = useState(0);
  
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProductsLoading());
    axios.get(`/items?page=${page}&limit=3` + (categoryActive? `&category=${categoryActive}`: ''))
    .then(({data}) => {
      dispatch(getProductsSuccess(data));
    } )
    .catch((err) => {
      dispatch(getProductsFail(err));
    })
    console.log(categoryActive)
  }, [categoryActive, dispatch, page])

  return (
    <div className='main'>
        <Categories setCategoryActive = {setCategoryActive} categoryActive = {categoryActive}/>
        <CardsList/>
        <Pagination onChangePage = {number => setPage(number)}/>
    </div>
  )
}

export default Main