
import style from "./styles.module.scss";
import human from "../../../assets/images/human.png"
function Card() {
  return (
    <div className={style.card}>
      <div className={style.content}>
			<img src={human} className={style.image} alt="logo" />
        <div className={style.info}>
          <div className={style.text}>живой</div>
          <div className={style.name}>Андрей Панасюк</div>
          <div className={style.date}>23.11.2001</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
