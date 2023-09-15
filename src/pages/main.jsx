import React from "react";
import CardsList from "../components/cards-list";
import Categories from "../components/categories";
import Sort from '../components/sort'
import '../scss/main/index.css'
import {
  getProductsLoading,
  getProductsSuccess,
  getProductsFail,
} from "../slice/products";
import axios from "../axios/index";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import Pagination from "../components/pagination";
function Main() {
  const sortList = [
    {name: 'популярности (DESC)', sortProperty: 'rating'},
    {name: 'популярности (ASC)', sortProperty: '-rating'},
    {name: 'цене (DESC)', sortProperty: 'price'},
    {name: 'цене (ASC)', sortProperty: '-price'}
  ];
  const [page, setPage] = useState(1);
  const [categoryActive, setCategoryActive] = useState(0);

  const [sortIndex, setSortIndex] = useState(0);
  const [active, setActive] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductsLoading());
    axios
      .get(
        `/items?&&sortBy=${(sortList[sortIndex].sortProperty).replace('-', '')}&order=${sortList[sortIndex].sortProperty.includes('-')?'asc' : 'desc'}&page=${page}&limit=3` +
          (categoryActive ? `&category=${categoryActive}` : "")
      )
      .then(({ data }) => {
        dispatch(getProductsSuccess(data));
      })
      .catch((err) => {
        dispatch(getProductsFail(err));
      });
  }, [categoryActive, dispatch, page, sortIndex]);

  return (
    <div className="main">
      <div className='flex'>
        <Categories
          setCategoryActive={setCategoryActive}
          categoryActive={categoryActive}
        />
        <Sort sortIndex= {sortIndex} setSortIndex = {setSortIndex} active = {active} setActive = {setActive} sortList = {sortList}/>
      </div>

      <CardsList />
      <Pagination onChangePage={(number) => setPage(number)} />
    </div>
  );
}

export default Main;
