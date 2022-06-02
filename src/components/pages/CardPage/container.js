import CardPage from "./component";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCardByIdFromAPI } from "../../../store/actions/cards";
import { getQuoteByName } from "../../../store/actions/quotes";
import { useParams } from "react-router-dom";
import Loader from "../../atoms/Loader";

const CardPageContainer = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const chosenCard = useSelector((state) => state.cards.chosenCard);
  const personQuote = useSelector((state) => state.quotes.personQuote);
  const isLoaderQuote = useSelector((state) => state.quotes.isLoaderQuote);
  const isErrorQuote = useSelector((state) => state.quotes.isErrorQuote);
  useEffect(() => {
    dispatch(getCardByIdFromAPI(id));
  }, []);
  useEffect(() => {
    dispatch(getQuoteByName(chosenCard.name));
  }, [chosenCard]);
  return isErrorQuote ? (
    <div style={{ color: "green", textAlign: "center", fontSize: "50px" }}>
      {isErrorQuote}
    </div>
  ) : isLoaderQuote ? (
      <Loader />
  ) : (
    <CardPage card={chosenCard} personQuote={personQuote} />
  );
};
export const container = CardPageContainer;
