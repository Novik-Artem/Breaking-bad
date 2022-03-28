import style from "./styles.module.scss";
const Card = ({ card }) => {
  return (
    <div className={style.card}>
      <div className={style.content}>
        <img src={card.img} className={style.image} alt="img" />
        <div className={style.info}>
          <div className={style.text}>{card.status}</div>
          <div className={style.name}>{card.name}</div>
          <div className={style.date}>{card.birthday}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
