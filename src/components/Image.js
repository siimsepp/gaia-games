import React, { useContext } from 'react'
import Context from '../context/Context'

const Image = () => {
  const context = useContext(Context)
  const { fileName } = context

  let imageFile
  if (fileName) imageFile = require(`../img/${fileName}`)

  return (
    <div className='map-cont'>{fileName && <img src={imageFile.default} className='pilt' alt='country map' />}</div>
  )
}

export default Image
