import { combineReducers } from "redux"
import cards from "./cards.js"
import quotes from "./quotes"

const reducers = combineReducers({
	cards,
	quotes
})
export default reducers