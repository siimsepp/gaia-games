const Reducer = (state, action) => {
  switch (action.type) {
    case 'RANDOM_COUNTRIES_SELECTED':
      return {
        ...state,
        selectedCountriesIndexes: action.randomCountries,
        btnClicked: action.btnClicked,
        correctCountryIndex: action.correctCountryIndex,
        correctCountry: action.correctCountry,
        fileName: action.fileName
      }
    case 'BTN_CLICKED':
      return {
        ...state,
        btnClicked: action.btnClicked,
        correctAnswer: action.correctAnswer
      }
    default:
      return state
  }
}

export default Reducer
