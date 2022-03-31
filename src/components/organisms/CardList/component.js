import Card from "../../molecules/Card";
import style from "./styles.module.scss";
const CardList = ({ cards }) => {
  return (
    <div className={style.cardList}>
      {cards.map((card) => (
        <Card card={card} key={card.id} />
      ))}
    </div>
  );
};
export default CardList;
