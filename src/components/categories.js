import React, { useEffect, useState } from 'react'
import axios from '../axios/index'

import '../scss/categories/categories.css'

function Categories() {
  const [categories, setCategories] = useState([])
  const [categoryActive, setCategoryActive]  = useState(0)
  useEffect(() => {
    axios.get('/categories').then(({data}) => {
      setCategories(data)
    })
  }, [])

  const activeCategory = (i) => {
    setCategoryActive(i)
  }
  return (
      <ul className='categories-list'>
        {
          categories.map((item, i) => (
            <li key={i} onClick={() => activeCategory(i)} className={'categories-list__item' + (categoryActive === i?' active': '')}>{item}</li>
          ))
        }
        
      </ul>

  )
}

export default Categories