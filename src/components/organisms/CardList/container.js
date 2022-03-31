import CardList from "./component";
import { useSelector } from "react-redux";
const CardListContainer = () => {
  const cards = useSelector((state) => state.cards.cards);
  return <CardList cards={cards} />;
};
export const container = CardListContainer;
