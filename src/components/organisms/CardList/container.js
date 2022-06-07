import CardList from "./component";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCardsFromAPI } from "../../../store/actions/cards";
import Loader from "../../atoms/Loader";

const CardListContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCardsFromAPI());
  }, []);
  const cards = useSelector((state) => state.cards.cards);
  const isError = useSelector((state) => state.cards.isError);
	const isLoader = useSelector((state) => state.cards.isLoader);
	
  return isError ? (
    <div style={{ color: "green", textAlign: "center", fontSize: "50px" }}>
      {isError}
    </div>
  ) : isLoader ? (
    <Loader />
  ) : (
    <CardList cards={cards} />
  );
};
export const container = CardListContainer;
