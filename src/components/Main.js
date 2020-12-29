import React, { useContext, useEffect } from 'react'
import Context from '../context/Context'
import Image from './Image'
import Buttons from './Buttons'

const Main = () => {
  const context = useContext(Context)
  const { randomCountries } = context

  useEffect(() => {
    randomCountries()
    // eslint-disable-next-line
  }, [])

  return (
    <div>
      <div className='img-btn-container'>
        <Image />
        <Buttons />
      </div>
    </div>
  )
}

export default Main
