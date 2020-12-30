import React, { useReducer } from 'react'
import Context from './Context'
import Reducer from './Reducer'
import data from '../data/data'

const State = props => {
  const initialState = {
    selectedCountriesIndexes: [],
    correctCountryIndex: null,
    correctCountry: '',
    btnClicked: false,
    correctAnswer: null
  }

  const [state, dispatch] = useReducer(Reducer, initialState)

  // Pick n random indexes of countries in data list
  const randomCountries = () => {
    let indeksid = []
    for (let i = 0; i < data.length; i++) {
      indeksid.push(i)
    }
    let valitud = []

    for (let i = 0; i < 8; i++) {
      const indeks = Math.floor(Math.random() * indeksid.length)
      valitud.push(indeksid[indeks])
      indeksid.splice(indeks, 1)
    }
    const correctCountryIndex = valitud[Math.floor(Math.random() * 8)] // Suvaline arv vahemikus 0...7
    const correctCountry = data[correctCountryIndex].country
    const fileName = data[correctCountryIndex].fileName
    dispatch({
      type: 'NEXT_BTN_CLICKED',
      randomCountries: valitud,
      btnClicked: false,
      correctAnswer: null,
      correctCountryIndex,
      correctCountry,
      fileName
    })
  }

  const btnHandle = (e, riigiIndeks) => {
    let correctAnswer
    if (riigiIndeks === state.correctCountryIndex) {
      correctAnswer = true
    } else {
      correctAnswer = false
    }
    dispatch({
      type: 'COUNTRY_BTN_CLICKED',
      btnClicked: true,
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
        btnClicked: state.btnClicked,
        correctAnswer: state.correctAnswer,
        randomCountries,
        btnHandle
      }}
    >
      {props.children}
    </Context.Provider>
  )
}

export default State
