import style from "./styles.module.scss";
import arrow from "../../../assets/icons/arrow.svg";

const Pagination = ({
  pages,
  currentPage,
  plusOffset,
  minusOffset,
  changeCurrentPage,
}) => {
  return (
    <div className={style.pagination}>
      <div className={style.numbers}>
        {pages.map((p) => {
          return (
            <span
              className={currentPage === p ? style.currentNumber : style.number}
              onClick={() => changeCurrentPage(p)}
            >
              {p}
            </span>
          );
        })}
      </div>
      <button className={style.button} onClick={minusOffset}>
        <img src={arrow} alt="" className={style.leftArrow} />
      </button>
      <button className={style.button} onClick={plusOffset}>
        <img src={arrow} alt="" className={style.rightArrow} />
      </button>
    </div>
  );
};

export default Pagination;
