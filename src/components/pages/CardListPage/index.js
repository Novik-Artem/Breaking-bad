import { Link } from "react-router-dom";
import style from "./styles.module.scss";
import CardList from "../../organisms/CardList"
const CardListPage = () => {
  return (
		<div className={style.content}>
			<h1 style={{ fontSize: "3rem"} }>cards page</h1>
			<Link to="/" className={style.link}>Main Page</Link>
			<CardList />
    </div>
  );
};
	
export default CardListPage;