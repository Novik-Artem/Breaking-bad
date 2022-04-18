import {
  LOADING_GETTING_CARDS,
  ERROR_GETTING_CARDS,
  SUCCESS_GETTING_CARDS,
} from "../actionsType";

import Repository from "../../repository";

export function cardsSuccess(value) {
  return { type: SUCCESS_GETTING_CARDS, value };
}

export function cardsLoader(value) {
  return { type: LOADING_GETTING_CARDS, value };
}

export function cardsError(value) {
  return { type: ERROR_GETTING_CARDS, value };
}

export const getCardsFromAPI = () => async (dispatch) => {
  dispatch(cardsLoader(true));

  const { value, error } = await Repository.APICore.getPersons();
  if (error || !value) {
    dispatch(cardsError(error));
  } else dispatch(cardsSuccess(value));

  dispatch(cardsLoader(false));
};
