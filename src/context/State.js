import React, { useReducer } from 'react'
import Context from './Context'
import Reducer from './Reducer'
import data from '../data/data'

const State = props => {
  const initialState = {
    selectedCountriesIndexes: [],
    correctCountryIndex: null,
    correctCountry: '',
    countryBtnClicked: false,
    correctAnswer: null,
    numberOfQuestions: 0, // Suureneb 1 võrra alles siis, kui kasutaja vajutab mõne riigi nupule, et vältida olukorda, kus kasutajale kuvatakse küsimus, aga tal pole aega reageerida
    scoreCorrect: 0,
    scoreWrong: 0,
    startBtnClicked: false,
    timeStart: null,
    gameEnd: false,
    gameDuration: 60000,
    mainVisibility: true,
    settingsVisibility: false,
    alert: ''
  }

  const [state, dispatch] = useReducer(Reducer, initialState)

  const startGame = () => {
    randomCountries()
    dispatch({
      type: 'START_BTN_CLICKED',
      startBtnClicked: true,
      timeStart: Date.now(),
      gameEnd: false,
      numberOfQuestions: 0,
      scoreCorrect: 0,
      scoreWrong: 0
    })
  }

  const tick = () => {
    if (state.timeStart !== null && Date.now() - state.timeStart > state.gameDuration) {
      dispatch({
        type: 'TIME_PASSED',
        gameEnd: true
      })
    }
  }

  // Pick 8 random indexes of countries in data list
  const randomCountries = () => {
    let indeksid = []
    for (let i = 0; i < data.length; i++) {
      indeksid.push(i)
    }
    let valitud = []

    for (let i = 0; i < 8; i++) {
      const indeks = Math.floor(Math.random() * indeksid.length)
      valitud.push(indeksid[indeks])
      indeksid.splice(indeks, 1) // Et sama riiki ei valitaks uuesti 8 valitu hulka
    }
    const suvaArv_0_7 = Math.floor(Math.random() * 8)
    let correctCountryIndex = valitud[suvaArv_0_7]

    // See on vajalik, et ei tuleks kaks korda järjest sama riiki.
    if (correctCountryIndex === state.correctCountryIndex && suvaArv_0_7 !== 7) {
      correctCountryIndex = valitud[suvaArv_0_7 + 1]
    } else if (correctCountryIndex === state.correctCountryIndex && suvaArv_0_7 === 7) {
      correctCountryIndex = valitud[suvaArv_0_7 - 1]
    }

    let correctCountry = data[correctCountryIndex].country
    const fileName = data[correctCountryIndex].fileName

    dispatch({
      type: 'NEXT_BTN_CLICKED',
      randomCountries: valitud,
      countryBtnClicked: false,
      correctAnswer: null,
      correctCountryIndex,
      correctCountry,
      fileName
    })
  }

  const countryBtnHandle = (e, riigiIndeks) => {
    let correctAnswer
    if (riigiIndeks === state.correctCountryIndex) {
      correctAnswer = true
    } else {
      correctAnswer = false
    }
    let scoreCorrect = state.scoreCorrect
    let scoreWrong = state.scoreWrong
    let numberOfQuestions = state.numberOfQuestions
    if (!state.countryBtnClicked) {
      correctAnswer ? scoreCorrect++ : scoreWrong++ // Et ei saaks ühe küsimusega teenida mitu korda õigeid ja valesid punkte
      numberOfQuestions++
    }
    dispatch({
      type: 'COUNTRY_BTN_CLICKED',
      countryBtnClicked: true,
      numberOfQuestions,
      correctAnswer,
      scoreCorrect,
      scoreWrong
    })
  }

  const andmedSisse = data => {
    randomCountries()
    dispatch({
      type: 'FORM_SUBMITTED',
      gameDuration: data.sekundid,
      startBtnClicked: true,
      timeStart: Date.now(),
      gameEnd: false,
      numberOfQuestions: 0,
      scoreCorrect: 0,
      scoreWrong: 0,
      mainVisibility: true,
      settingsVisibility: false
    })
  }

  const settingsClicked = () => {
    dispatch({
      type: 'SETTINGS_CLICKED',
      mainVisibility: false,
      settingsVisibility: true
    })
  }

  const setAlert = msg => {
    dispatch({ type: 'SET_ALERT', value: msg })
    setTimeout(() => {
      dispatch({ type: 'SET_ALERT', value: '' })
    }, 4000)
  }

  return (
    <Context.Provider
      value={{
        selectedCountriesIndexes: state.selectedCountriesIndexes,
        correctCountryIndex: state.correctCountryIndex,
        correctCountry: state.correctCountry,
        fileName: state.fileName,
        countryBtnClicked: state.countryBtnClicked,
        correctAnswer: state.correctAnswer,
        numberOfQuestions: state.numberOfQuestions,
        scoreCorrect: state.scoreCorrect,
        scoreWrong: state.scoreWrong,
        startBtnClicked: state.startBtnClicked,
        timeStart: state.timeStart,
        gameEnd: state.gameEnd,
        gameDuration: state.gameDuration,
        mainVisibility: state.mainVisibility,
        settingsVisibility: state.settingsVisibility,
        alert: state.alert,
        randomCountries,
        countryBtnHandle,
        startGame,
        tick,
        andmedSisse,
        settingsClicked,
        setAlert
      }}
    >
      {props.children}
    </Context.Provider>
  )
}

export default State
