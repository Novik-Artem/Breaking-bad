import Pagination from "./component";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  increaseOffset,
  reduceOffset,
  setCurrentPage,
  getTotalCardsCount,
} from "../../../store/actions/cards";

const PaginationContainer = () => {
  const dispatch = useDispatch();
  const totalCardsCount = useSelector((state) => state.cards.totalCardsCount);
  const limit = useSelector((state) => state.cards.limit);
  const currentPage = useSelector((state) => state.cards.currentPage);

  const plusOffset = () => {
    if (currentPage !== pagesCount) {
      dispatch(increaseOffset());
    }
  };
  const minusOffset = () => {
    if (currentPage !== 1) {
      dispatch(reduceOffset());
    }
  };
  const changeCurrentPage = (pageNumber) => {
    dispatch(setCurrentPage(pageNumber));
  };

  useEffect(() => {
    dispatch(getTotalCardsCount());
  }, []);

  let pagesCount = Math.ceil(totalCardsCount / limit);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <Pagination
      pages={pages}
      currentPage={currentPage}
      plusOffset={plusOffset}
      minusOffset={minusOffset}
      changeCurrentPage={changeCurrentPage}
      pagesCount={pagesCount}
    />
  );
};
export const container = PaginationContainer;
