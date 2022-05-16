import style from "./styles.module.scss";
import CardList from "../../organisms/CardList"
import Header from "../../molecules/Header"

const CardListPage = () => {
  return (
		<div className={style.content}>
			<Header />
			<CardList />
    </div>
  );
};
	
export default CardListPage;