import React, { useState, useEffect, useContext, useRef } from 'react'
import Context from '../context/Context'
import Alert from './Alert'

function Settings() {
  const [sekundid, setSekundid] = useState('')

  const context = useContext(Context)
  const { setAlert, andmedSisse, gameDuration } = context

  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  const handleChange = e => setSekundid(e.target.value)

  const handleSubmit = e => {
    e.preventDefault()
    if (sekundid === '') {
      setAlert('Palun sisesta mängu kestus sekundites')
    } else if (isNaN(sekundid)) {
      setAlert('Palun sisesta arv')
    } else if (+sekundid % 1 !== 0) {
      setAlert('Palun sisesta punktiväljale täisarv')
    } else if (+sekundid < 10) {
      setAlert('Nii lühike mäng ei oma suuremat mõtet')
    } else {
      andmedSisse({
        sekundid: +sekundid * 1000
      })
    }
  }

  return (
    <div>
      <Alert />
      <p>The duration of the game is currently {gameDuration / 1000} seconds. You can change it here:</p>

      <form onSubmit={handleSubmit}>
        <input
          type='text'
          id='seconds'
          name='seconds'
          value={sekundid}
          onChange={handleChange}
          placeholder='Game duration in seconds'
          ref={inputRef}
        />
        <button type='submit' className='btn'>
          Submit
        </button>
      </form>
    </div>
  )
}

export default Settings
