import {
  //CHANGE_NUMBER_LOADER,
  ERROR_GETTING_NUMBER,
  NUMBER_SUCCESS,
} from "../actionsType";

//export function numberLoader(value) {
//  return { type: CHANGE_NUMBER_LOADER, value };
//}
import Repository from "../../repository"
export function numberError(value) {
	return { type: ERROR_GETTING_NUMBER, value };
}
export function numberSuccess(value) {
  return { type: NUMBER_SUCCESS, value };
}
export const getNumberFromAPI = () => async (dispatch) => {
  //dispatch(numberLoader(true));

  const { value, error } = await Repository.APICore.getPersons();
  if (error || !value) {
    dispatch(numberError(true));
	} else 
	dispatch(numberSuccess(value));

  //dispatch(numberLoader(false));
};

