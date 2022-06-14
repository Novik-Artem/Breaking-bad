import { Link } from "react-router-dom";
import style from "./styles.module.scss";
const Card = ({ img, birthday, status, name, id }) => {
  return (
    <Link to={`/card/${id}`}>
      <div className={style.card}>
        <div className={style.content}>
          <img src={img} className={style.image} alt="" />
          <div className={style.info}>
            <div className={style.text}>{status}</div>
            <div className={style.name}>{name}</div>
            <div className={style.date}>{birthday}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
