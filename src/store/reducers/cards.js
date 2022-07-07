import {
  LOADING_GETTING_CARDS,
  ERROR_GETTING_CARDS,
  SUCCESS_GETTING_CARDS,
  SET_CHOSEN_CARD,
  INCREASE_OFFSET,
  REDUCE_OFFSET,
	SET_CURRENT_PAGE,
	TOTAL_CARDS_COUNT,
	CHANGE_CARDS_COUNT
} from "../actionsType/cards";

const initialState = {
  cards: [],
  isError: false,
  isLoader: null,
  chosenCard: {},
	totalCardsCount: 0,
  currentPage: 1,
  limit: 10,
  offset: 0,
};

const card = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS_GETTING_CARDS:
      return {
        ...state,
        cards: action.value,
      };
    case ERROR_GETTING_CARDS:
      return {
        ...state,
        isError: action.value,
      };
    case LOADING_GETTING_CARDS:
      return {
        ...state,
        isLoader: action.value,
      };
    case SET_CHOSEN_CARD:
      return {
        ...state,
        chosenCard: action.value,
      };
    case INCREASE_OFFSET:
      return {
        ...state,
        offset: state.offset + state.limit,
        currentPage: state.currentPage + 1,
      };
    case REDUCE_OFFSET:
      return {
        ...state,
        offset: state.offset - state.limit,
        currentPage: state.currentPage - 1,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
        offset: (action.currentPage - 1) * state.limit,
			};
			case TOTAL_CARDS_COUNT:
				return {
					...state,
					totalCardsCount: action.value,
			};
			case CHANGE_CARDS_COUNT:
				return {
					...state,
					limit: action.limit,
				};
    default:
      return state;
  }
};
export default card;
