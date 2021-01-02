import React, { useContext } from 'react'
import Context from '../context/Context'

const Start = () => {
  const context = useContext(Context)
  const { startGame } = context
  return (
    <div>
      <button className='btn' onClick={startGame}>
        Start
      </button>
    </div>
  )
}

export default Start
