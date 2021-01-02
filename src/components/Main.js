import React, { Fragment, useContext, useEffect } from 'react'
import Context from '../context/Context'
import Image from './Image'
import Buttons from './Buttons'
import CorrectBtn from './CorrectBtn'
import NextBtn from './NextBtn'
import Statistics from './Statistics'
import Start from './Start'
import Settings from './Settings'

const Main = () => {
  const context = useContext(Context)
  const { startBtnClicked, tick, gameEnd, mainVisibility, settingsVisibility } = context

  useEffect(() => {
    const timer = setInterval(() => tick(), 1000)
    return () => {
      clearInterval(timer)
    }
  })

  return (
    <Fragment>
      {mainVisibility && (
        <Fragment>
          {gameEnd ? (
            <Statistics />
          ) : (
            <Fragment>
              {startBtnClicked ? (
                <Fragment>
                  <Image />
                  <Buttons />
                  <CorrectBtn />
                  <NextBtn />
                </Fragment>
              ) : (
                <Start />
              )}
            </Fragment>
          )}
        </Fragment>
      )}
      {settingsVisibility && <Settings />}
    </Fragment>
  )
}

export default Main
