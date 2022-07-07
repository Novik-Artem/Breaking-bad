import NumberOfCards from "./component";
import { useSelector, useDispatch } from "react-redux";
import { changeCardsCount } from "../../../store/actions/cards";

const CardListContainer = () => {
  const dispatch = useDispatch();
  const limit = useSelector((state) => state.cards.limit);

  const numbers = [5, 10, 15, 20];
  const changeCardsNumber = (cardsCount) => {
    dispatch(changeCardsCount(cardsCount));
  };

  return (
    <NumberOfCards
      numbers={numbers}
      limit={limit}
      changeCardsNumber={changeCardsNumber}
    />
  );
};
export const container = CardListContainer;
