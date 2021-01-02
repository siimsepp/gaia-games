const Reducer = (state, action) => {
  switch (action.type) {
    case 'NEXT_BTN_CLICKED':
      return {
        ...state,
        selectedCountriesIndexes: action.randomCountries,
        countryBtnClicked: action.countryBtnClicked,
        correctAnswer: action.correctAnswer,
        correctCountryIndex: action.correctCountryIndex,
        correctCountry: action.correctCountry,
        fileName: action.fileName
      }
    case 'COUNTRY_BTN_CLICKED':
      return {
        ...state,
        countryBtnClicked: action.countryBtnClicked,
        numberOfQuestions: action.numberOfQuestions,
        correctAnswer: action.correctAnswer,
        scoreCorrect: action.scoreCorrect,
        scoreWrong: action.scoreWrong
      }
    case 'START_BTN_CLICKED':
      return {
        ...state,
        startBtnClicked: action.startBtnClicked,
        timeStart: action.timeStart,
        gameEnd: action.gameEnd,
        numberOfQuestions: action.numberOfQuestions,
        scoreCorrect: action.scoreCorrect,
        scoreWrong: action.scoreWrong
      }
    case 'TIME_PASSED':
      return {
        ...state,
        gameEnd: action.gameEnd
      }
    case 'FORM_SUBMITTED':
      return {
        ...state,
        gameDuration: action.gameDuration,
        startBtnClicked: action.startBtnClicked,
        timeStart: action.timeStart,
        gameEnd: action.gameEnd,
        numberOfQuestions: action.numberOfQuestions,
        scoreCorrect: action.scoreCorrect,
        scoreWrong: action.scoreWrong,
        mainVisibility: action.mainVisibility,
        settingsVisibility: action.settingsVisibility
      }
    case 'SETTINGS_CLICKED':
      return {
        ...state,
        mainVisibility: action.mainVisibility,
        settingsVisibility: action.settingsVisibility
      }
    case 'SET_ALERT':
      return {
        ...state,
        alert: action.value
      }
    default:
      return state
  }
}

export default Reducer
