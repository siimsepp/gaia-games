import React, { Fragment, useContext, useEffect } from 'react'
import Context from '../context/Context'
import Image from './Image'
import Buttons from './Buttons'
import CorrectBtn from './CorrectBtn'
import NextBtn from './NextBtn'

const Main = () => {
  const context = useContext(Context)
  const { randomCountries } = context

  useEffect(() => {
    randomCountries()
    // eslint-disable-next-line
  }, [])

  return (
    <Fragment>
      <Image />
      <Buttons />
      <CorrectBtn />
      <NextBtn />
    </Fragment>
  )
}

export default Main
