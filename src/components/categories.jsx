import React from 'react'

import '../scss/categories/categories.css'

function Categories({setCategoryActive, categoryActive}) {
  const categories = [ "Все", "Мясные", "Острые", "Новые"];

  const activeCategory = (i) => {
    setCategoryActive(i);
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