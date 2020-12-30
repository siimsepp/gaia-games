import React, { useContext } from 'react'
import Context from '../context/Context'

const CorrectBtn = () => {
  const context = useContext(Context)
  const { correctAnswer } = context

  return (
    <div className='corr-btn-cont'>
      {correctAnswer !== null ? (
        correctAnswer === true ? (
          <div className='btn btn-correct'>Correct</div>
        ) : (
          <div className='btn btn-wrong'>Wrong</div>
        )
      ) : null}
    </div>
  )
}

export default CorrectBtn
