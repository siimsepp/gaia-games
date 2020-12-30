import React, { useContext } from 'react'
import Context from '../context/Context'
import data from '../data/data'

const Buttons = () => {
  const context = useContext(Context)
  const { selectedCountriesIndexes, btnHandle } = context

  return (
    <div className='buttons-cont'>
      <ul>
        {selectedCountriesIndexes.map((riigiIndeks, index) => (
          <li key={index}>
            <div
              className='btn'
              onClick={e => {
                btnHandle(e, riigiIndeks)
              }}
            >
              {data[riigiIndeks].riik}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Buttons
