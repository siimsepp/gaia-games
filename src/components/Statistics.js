import React, { useContext } from 'react'
import Context from '../context/Context'

const Statistics = () => {
  const context = useContext(Context)
  const { scoreCorrect, numberOfQuestions, startGame, settingsClicked } = context

  const percent = ((scoreCorrect / numberOfQuestions) * 100).toFixed(1)

  return (
    <div>
      <p>Tulemused:</p>
      <ul className='collection'>
        <li key='1' className='collection-item'>
          <div>Esitatud küsimuste arv: {numberOfQuestions}</div>
        </li>
        <li key='4' className='collection-item'>
          <div>Õigete vastuste protsent: {!isNaN(percent) ? percent : 0}</div>
        </li>
      </ul>
      <button className='btn' onClick={startGame}>
        Play Again
      </button>
      <button className='btn' onClick={settingsClicked}>
        Settings
      </button>
    </div>
  )
}

export default Statistics
