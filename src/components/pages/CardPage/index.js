import { Link } from "react-router-dom";
import style from "./styles.module.scss";
const CardPage = () => {
  return (
		<div className={style.content}>
			<Link to="/cards" className={style.link}>Cards Page</Link>
			<Link to="/" className={style.link}>Main page</Link>
			<h1>card page</h1>
    </div>
  );
};
	
export default CardPage;