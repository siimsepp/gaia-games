import React, { useContext } from 'react'
import Context from '../context/Context'

const Alert = () => {
  const context = useContext(Context)
  const { alert } = context

  return alert !== '' && <div className='alert'>{alert}</div>
}

export default Alert
