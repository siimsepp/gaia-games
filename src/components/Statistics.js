import React, { useContext } from 'react'
import Context from '../context/Context'

const Statistics = () => {
  const context = useContext(Context)
  const { scoreCorrect, numberOfQuestions, startGame, settingsClicked } = context

  const percent = (scoreCorrect / numberOfQuestions) * 100
  let status
  if (percent === 100) {
    status = 'Geograafia ekspert'
  } else if (percent > 90) {
    status = 'Täielik Einstein'
  } else if (percent > 50) {
    status = 'Hästi tehtud'
  } else {
    status = 'Vajab veel harjutamist'
  }

  return (
    <div>
      <p>Tulemused:</p>
      <ul className='collection'>
        <li key='1' className='collection-item'>
          <div>Esitatud küsimuste arv: {numberOfQuestions}</div>
        </li>
        <li key='2' className='collection-item'>
          <div>Õigete vastuste protsent: {!isNaN(percent) ? percent.toFixed(1) : 0}</div>
        </li>
        <li key='3' className='collection-item'>
          <div className='status'>{status}</div>
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
