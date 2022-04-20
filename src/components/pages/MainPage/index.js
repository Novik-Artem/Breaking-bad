import { Link } from "react-router-dom";
import style from "./styles.module.scss";
const MainPage = () => {
  return (
		<div className={style.content}>
			<h1>main page</h1>
      <Link to="/cards" className={style.link}>
        cards page
      </Link>
    </div>
  );
};

export default MainPage;
