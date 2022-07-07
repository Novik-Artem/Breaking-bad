import {
  LOADING_GETTING_CARDS,
  ERROR_GETTING_CARDS,
  SUCCESS_GETTING_CARDS,
  SET_CHOSEN_CARD,
  INCREASE_OFFSET,
  REDUCE_OFFSET,
  SET_CURRENT_PAGE,
  TOTAL_CARDS_COUNT,
  CHANGE_CARDS_COUNT,
  SEARCH_PERSON_BY_NAME,
  RESET_FOUNDED_PERSONS,
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

export function increaseOffset() {
  return { type: INCREASE_OFFSET };
}

export function reduceOffset() {
  return { type: REDUCE_OFFSET };
}

export function setCurrentPage(currentPage) {
  return { type: SET_CURRENT_PAGE, currentPage };
}

export function cardsCount(value) {
  return { type: TOTAL_CARDS_COUNT, value };
}

export function changeCardsCount(limit) {
  return { type: CHANGE_CARDS_COUNT, limit };
}

export function searchPersonByName(value) {
  return { type: SEARCH_PERSON_BY_NAME, value };
}

export function resetFoundedPersons() {
  return { type: RESET_FOUNDED_PERSONS };
}

export const getCardsFromAPI =
  (limit, offset, currentPage) => async (dispatch) => {
    dispatch(cardsLoader(true));
    const { value, error } = await Repository.APICards.getPersons(
      limit,
      offset,
      currentPage
    );
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

export const getTotalCardsCount = () => async (dispatch) => {
  const { value, error } = await Repository.APICards.getTotalCardsCount();
  if (error || !value) {
    dispatch(cardsError(error));
  } else dispatch(cardsCount(value));
};

export const getPersonName = (name) => async (dispatch) => {
  const { value, error } = await Repository.APICards.getPersonName(name);
  if (error || !value) {
    dispatch(cardsError(error));
  } else dispatch(searchPersonByName(value));
};
