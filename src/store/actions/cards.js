import {
  LOADING_GETTING_CARDS,
  ERROR_GETTING_CARDS,
  SUCCESS_GETTING_CARDS,
  SET_CHOSEN_CARD,
} from "../actionsType/cards";

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

export function setChosenCard(value) {
  return { type: SET_CHOSEN_CARD, value };
}

export const getCardsFromAPI = () => async (dispatch) => {
  dispatch(cardsLoader(true));

  const { value, error } = await Repository.APICards.getPersons();
  if (error || !value) {
    dispatch(cardsError(error));
  } else dispatch(cardsSuccess(value));

  dispatch(cardsLoader(false));
};

export const getCardByIdFromAPI = (id) => async (dispatch) => {
  dispatch(cardsLoader(true));

  const { value, error } = await Repository.APICards.getPersonById(id);
  if (error || !value) {
    dispatch(cardsError(error));
  } else dispatch(setChosenCard(value[0]));

  dispatch(cardsLoader(false));
};
