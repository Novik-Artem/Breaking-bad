import CardList from "./component";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCardsFromAPI } from "../../../store/actions/cards";
import Loader from "../../atoms/Loader";
import { useState } from "react";

const CardListContainer = () => {
  let [isGrid, setIsGrid] = useState(true);
  const dispatch = useDispatch();
  const limit = useSelector((state) => state.cards.limit);
  const offset = useSelector((state) => state.cards.offset);
	const currentPage = useSelector((state) => state.cards.currentPage);

  useEffect(() => {
		dispatch(getCardsFromAPI(limit, offset, currentPage));
  }, [offset, currentPage, limit]);

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
    <CardList cards={cards} isGrid={isGrid} setIsGrid={setIsGrid} />
  );
};
export const container = CardListContainer;
