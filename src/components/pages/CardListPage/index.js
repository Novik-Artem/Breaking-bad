import style from "./styles.module.scss";
import CardList from "../../organisms/CardList";
import Pagination from "../../molecules/Pagination";
import ShowNumberOfCards from "../../organisms/ShowNumberOfCards";
import Search from "../../organisms/Search";
import { useSelector, useDispatch } from "react-redux";
import Card from "../../molecules/Card";
import { resetFoundedPersons } from "../../../store/actions/cards";

const CardListPage = () => {
  const dispatch = useDispatch();
  const foundedPersons = useSelector((state) => state.cards.foundedPersons);
  const reset = () => {
    dispatch(resetFoundedPersons());
  };
  return (
    <div className={style.content}>
      <Search />
      {foundedPersons ? (
        <div>
          <div className={style.back} onClick={reset}>
            {" "}
            ⟵ Вернуться в каталог
          </div>
          <div className={style.foundedContent}>
            {foundedPersons.map((item) => (
              <Card
                img={item.img}
                birthday={item.birthday}
                status={item.status}
                name={item.name}
                key={item.char_id}
                id={item.char_id}
              />
            ))}
          </div>
        </div>
      ) : (
        <>
          <CardList />
          <div className={style.choiceBlock}>
            <Pagination />
            <ShowNumberOfCards />
          </div>
        </>
      )}
    </div>
  );
};

export default CardListPage;
