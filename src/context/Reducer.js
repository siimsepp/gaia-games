const Reducer = (state, action) => {
  switch (action.type) {
    case 'NEXT_BTN_CLICKED':
      return {
        ...state,
        selectedCountriesIndexes: action.randomCountries,
        btnClicked: action.btnClicked,
        correctAnswer: action.correctAnswer,
        correctCountryIndex: action.correctCountryIndex,
        correctCountry: action.correctCountry,
        fileName: action.fileName
      }
    case 'COUNTRY_BTN_CLICKED':
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
