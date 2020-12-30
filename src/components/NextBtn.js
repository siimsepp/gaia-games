import React, { useContext } from 'react'
import Context from '../context/Context'

const NextBtn = () => {
  const context = useContext(Context)
  const { randomCountries, correctAnswer } = context

  return (
    <div className='next-btn-cont'>
      {correctAnswer ? (
        <div className='btn btn-new-set' onClick={randomCountries}>
          Next
        </div>
      ) : (
        <div className='btn-new-set-disabled'>Next</div>
      )}
    </div>
  )
}

export default NextBtn
