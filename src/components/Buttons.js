import React, { useContext } from 'react'
import Context from '../context/Context'
import data from '../data/data'

const Buttons = () => {
  const context = useContext(Context)
  const { selectedCountriesIndexes, btnHandle, randomCountries } = context
  return (
    <div className='btn-container'>
      <ul>
        {selectedCountriesIndexes.map((riigiIndeks, index) => (
          <li key={index}>
            <div
              className='btn'
              onClick={e => {
                btnHandle(e, riigiIndeks)
              }}
            >
              {data[riigiIndeks].country}
            </div>
          </li>
        ))}
      </ul>
      <div className='btn btn-new-set' onClick={randomCountries}>
        Next
      </div>
    </div>
  )
}

export default Buttons