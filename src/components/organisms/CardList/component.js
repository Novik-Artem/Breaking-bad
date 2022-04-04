import Card from "../../molecules/Card";
import style from "./styles.module.scss";
const CardList = ({ cards }) => {
  return (
    <div className={style.cardList}>
      {cards.map((card) => (
        <Card
          img={card.img}
          birthday={card.birthday}
          status={card.status}
          name={card.name}
          key={card.id}
        />
      ))}
    </div>
  );
};
export default CardList;
