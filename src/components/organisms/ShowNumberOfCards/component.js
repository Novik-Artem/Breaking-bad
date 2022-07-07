import style from "./styles.module.scss";

const NumberOfCards = ({ numbers, limit, changeCardsNumber }) => {
  return (
    <div className={style.cardsNumber}>
      <div className={style.showCards}>Отобразить карточек:</div>
      <div>
        {numbers.map((number) => {
          return (
            <span
              className={limit === number ? style.currentNumber : style.number}
              onClick={() => changeCardsNumber(number)}
            >
              {number}
            </span>
          );
        })}
      </div>
    </div>
  );
};
export default NumberOfCards;
