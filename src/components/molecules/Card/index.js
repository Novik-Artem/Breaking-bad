import style from "./styles.module.scss";
const Card = ({ img, birthday, status, name }) => {
  return (
    <div className={style.card}>
      <div className={style.content}>
        <img src={img} className={style.image} alt="img" />
        <div className={style.info}>
          <div className={style.text}>{status}</div>
          <div className={style.name}>{name}</div>
          <div className={style.date}>{birthday}</div>
        </div>
      </div>
    </div>
  );
};
	
export default Card;
