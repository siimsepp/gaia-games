import React, { useContext } from 'react'
import Context from '../context/Context'
import data from '../data/data'

const Buttons = () => {
  const context = useContext(Context)
  const { selectedCountriesIndexes, countryBtnHandle } = context

  return (
    <div className='buttons-cont'>
      <ul>
        {selectedCountriesIndexes.map((riigiIndeks, index) => (
          <li key={index}>
            <div
              className='btn waves-effect waves-light blue'
              onClick={e => {
                countryBtnHandle(e, riigiIndeks)
              }}
            >
              {data[riigiIndeks].country}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Buttons
