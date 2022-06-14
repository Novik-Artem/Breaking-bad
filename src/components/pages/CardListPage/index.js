import style from "./styles.module.scss";
import CardList from "../../organisms/CardList";
import search from "../../../assets/icons/search.svg";

const CardListPage = () => {
  return (
    <div className={style.content}>
      <div className={style.search}>
        <input type="text" placeholder="поиск" className={style.input} />
        <div className={style.text}>
          <img src={search} alt="" className={style.searchIcon} />
          Найти
        </div>
      </div>
      <CardList />
    </div>
  );
};

export default CardListPage;
