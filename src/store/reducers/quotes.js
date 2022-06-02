import {
  LOADING_GETTING_QUOTE,
  ERROR_GETTING_QUOTE,
	SET_QUOTE,
} from "../actionsType/quotes";

const initialState = {
  personQuote: '',
  isLoaderQuote: null,
  isErrorQuote: false,
};

const quote = (state = initialState, action) => {
	switch (action.type) {
    case SET_QUOTE:
      return {
        ...state,
				personQuote: action.value,
			};
    case ERROR_GETTING_QUOTE:
      return {
        ...state,
        isErrorQuote: action.value,
      };
    case LOADING_GETTING_QUOTE:
      return {
        ...state,
        isLoaderQuote: action.value,
			};
    default:
      return state;
  }
};
export default quote;