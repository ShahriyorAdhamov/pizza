import React from 'react'
import CardsList from './cards-list'
import Categories from './categories'


function Main() {

  return (
    <div className='main'>
        <Categories/>
        <CardsList/>
    </div>
  )
}

export default Main