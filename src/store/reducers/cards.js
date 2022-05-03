import {
  LOADING_GETTING_CARDS,
  ERROR_GETTING_CARDS,
	SUCCESS_GETTING_CARDS,
	SET_CHOSEN_CARD,
} from "../actionsType";

const initialState = {
  cards: [],
  isError: false,
	isLoader: null,
	chosenCard:{},
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
			}
    default:
      return state;
  }
};
export default card;
