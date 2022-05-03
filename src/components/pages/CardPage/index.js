export * from "./component";
export { container as default } from "./container";


//import { Link } from "react-router-dom";
//import style from "./styles.module.scss";
//import icon from "../../../assets/icons/arrow.svg";
//import { useSelector, useDispatch } from "react-redux";
//import { useEffect } from "react";
//import { getCardsFromAPI } from "../../../store/actions";
//const CardPage = () => {
//  const dispatch = useDispatch();
//  useEffect(() => {
//    dispatch(getCardsFromAPI());
//	},);
//	const chosenCard = useSelector((state) => state.cards.chosenCard);
//	return (

//    <div className={style.container}>
//      <Link to="/cards" className={style.link}>
//        <img src={icon} className={style.icon} />
//        назад в каталог
//			</Link>
//      <div className={style.content}>
//        <div className={style.image}>
//          <img src={chosenCard.img} />
//        </div>
//        <div className={style.info}>
//          <div className={style.status}>{chosenCard.status}</div>
//          <div className={style.name}>{chosenCard.name}</div>
//          <div className={style.date}>
//            <span>Дата рождения:</span> {chosenCard.birthday}
//          </div>
//          <div className={style.nickname}>
//            <span>Ник-нейм:</span> Андрей-завоеватель
//          </div>
//          <div className={style.quote}>
//            <span>Цитата:</span> Lorem ipsum dolor sit amet, consectetur
//            adipiscing elit. Non, aliquam laoreet vivamus sed. Diam fames mi,
//            quam tellus cursus volutpat velit massa.
//          </div>
//        </div>
//      </div>
//    </div>
//  );
//};

//export default CardPage;
