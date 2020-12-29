import React, { useContext, Fragment } from 'react'
import Context from '../context/Context'

const Image = () => {
  const context = useContext(Context)
  const { fileName, btnClicked, correctAnswer } = context

  let imageFile
  if (fileName) imageFile = require(`../img/${fileName}`)
  const buttonColor = correctAnswer ? '#4caf50' : '#f44336'

  return (
    <Fragment>
      <div className='img-container'>
        <div>{fileName && <img src={imageFile.default} className='pilt' alt='country map' />}</div>
        {btnClicked && (
          <div className='btn correct-msg' style={{ background: buttonColor }}>
            {correctAnswer ? 'Correct' : 'Wrong'}
          </div>
        )}
      </div>
    </Fragment>
  )
}

export default Image
