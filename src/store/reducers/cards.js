import { v4 as uuidv4 } from "uuid";
import human from "../../assets/images/human.png";
import {
  //CHANGE_NUMBER_LOADER,
  ERROR_GETTING_NUMBER,
  NUMBER_SUCCESS,
} from "../actionsType";
const initialState = {
  cards: [
  ],
};
const card = (state = initialState, action) => {
	switch (action.type) {
		case NUMBER_SUCCESS:
			return {
				...state, cards: action.value
			}
    default:
      return state;
  }
};
export default card;
