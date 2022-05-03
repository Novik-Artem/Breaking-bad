import CardPage from "./component";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCardByIdFromAPI } from "../../../store/actions";
import { useParams } from "react-router-dom";

const CardPageContainer = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const chosenCard = useSelector((state) => state.cards.chosenCard);
  useEffect(() => {
    dispatch(getCardByIdFromAPI(id));
  },[id]);
	return (
		<CardPage card={chosenCard} />
	);
};
export const container = CardPageContainer;
