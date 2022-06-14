import { Link } from "react-router-dom";
import style from "./styles.module.scss";
const CardGrid = ({ img, birthday, status, name, id }) => {
  return (
    <Link to={`/card/${id}`}>
      <div className={style.card}>
        <img src={img} className={style.image} alt="" />
        <div className={style.info}>
          <div className={style.status}>
            <div className={style.text}>{status}</div>
          </div>
          <div className={style.name}>{name}</div>
          <div className={style.date}>{birthday}</div>
        </div>
      </div>
    </Link>
  );
};

export default CardGrid;
