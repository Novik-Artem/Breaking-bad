import style from "./styles.module.scss";
import Card from "../../molecules/Card";
import { v4 as uuidv4 } from "uuid";
import human from "../../../assets/images/human.png";
const CardList = () => {
  const cards = [
    {
      id: uuidv4(),
      name: "Андрей Панасюк",
      birthday: "23.11.2001",
      img: human,
      status: "живой",
    },
    {
      id: uuidv4(),
      name: "Андрей Панасюк",
      birthday: "23.11.2001",
      img: human,
      status: "живой",
    },
    {
      id: uuidv4(),
      name: "Андрей Панасюк",
      birthday: "23.11.2001",
      img: human,
      status: "живой",
    },
    {
      id: uuidv4(),
      name: "Андрей Панасюк",
      birthday: "23.11.2001",
      img: human,
      status: "живой",
    },
    {
      id: uuidv4(),
      name: "Андрей Панасюк",
      birthday: "23.11.2001",
      img: human,
      status: "живой",
		},
  ];
  return (
    <div className={style.cardList}>
      {cards.map((card) => (
        <Card card={card} key={card.id} />
      ))}
    </div>
  );
};
export default CardList;
