import {
  LOADING_GETTING_QUOTE,
  ERROR_GETTING_QUOTE,
  SET_QUOTE,
} from "../actionsType/quotes";
import Repository from "../../repository";

export const personQuote = (value) => {
  return {
    type: SET_QUOTE,
    value,
  };
};

export const isErrorQuote = (value) => {
  return {
    type: ERROR_GETTING_QUOTE,
    value,
  };
};

export const isLoaderQuote = (value) => {
  return {
    type: LOADING_GETTING_QUOTE,
    value,
  };
};

export const getQuoteByName = (name) => async (dispatch) => {
  dispatch(isLoaderQuote(true));
	const { value, error } = await Repository.APIQuotes.getQuoteByName(name);
  if (error || !value) {
    dispatch(isErrorQuote(error));
  } else dispatch(personQuote(value));
  dispatch(isLoaderQuote(false));
};
