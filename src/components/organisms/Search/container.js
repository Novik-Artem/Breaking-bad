import Search from "./component";
import { useDispatch } from "react-redux";
import { getPersonName } from "../../../store/actions/cards";

const SearchContainer = () => {

  const dispatch = useDispatch();
  const search = (name) => {
		dispatch(getPersonName(name));
	};
	
  return <Search search={search} />;
};
export const container = SearchContainer;
