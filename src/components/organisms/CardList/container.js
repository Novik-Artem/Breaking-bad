import CardList from "./component";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getNumberFromAPI } from "../../../store/actions";
const CardListContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNumberFromAPI());
  });
  const cards = useSelector((state) => state.cards.cards);
  return <CardList cards={cards} />;
};
export const container = CardListContainer;
