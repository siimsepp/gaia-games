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
    correctAnswer: null
  }

  const [state, dispatch] = useReducer(Reducer, initialState)

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
      indeksid.splice(indeks, 1) // Et sama riiki ei valitaks uuesti
    }
    const suvaArv_0_7 = Math.floor(Math.random() * 8)
    let correctCountryIndex = valitud[suvaArv_0_7] // Suvaline arv vahemikus 0...7

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
    dispatch({
      type: 'COUNTRY_BTN_CLICKED',
      countryBtnClicked: true,
      correctAnswer
    })
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
        randomCountries,
        countryBtnHandle
      }}
    >
      {props.children}
    </Context.Provider>
  )
}

export default State
