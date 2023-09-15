import {useState} from 'react'
import '../scss/sort/sort.css'

function Sort({sortList, setActive, setSortIndex, active, sortIndex}) {

  const clickLi = (i) => {
    setSortIndex(i);
    setActive(false);
  }
  return (
    <div className='sort'>
      <p>сортировка по: <span onClick={() => setActive(true)}>{sortList[sortIndex].name}</span></p>
      {active?<ul>
        {sortList.map((obj, i) => (
          <li className={(sortIndex === i?' active': '')} key={i} onClick={() => clickLi(i)}>{obj.name}</li>
        ))}
      </ul>: ''}
    </div>
  )
}

export default Sort