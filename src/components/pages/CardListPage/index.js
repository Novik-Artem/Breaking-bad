import style from "./styles.module.scss";
import CardList from "../../organisms/CardList";

const CardListPage = () => {
  return (
    <div className={style.content}>
      <CardList />
    </div>
  );
};

export default CardListPage;
