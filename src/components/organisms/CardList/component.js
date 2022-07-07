import style from "./styles.module.scss";
import Card from "../../molecules/Card";
import CardGrid from "../../molecules/CardGrid";

const CardList = ({ cards, isGrid, setIsGrid }) => {
  return (
    <div>
      <div className={style.catalog}>
        <h1 className={style.title}>Каталог</h1>
        <div className={style.tabs}>
          <div className={isGrid? style.list : style.active} onClick={() => setIsGrid(false)}>
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<rect x="1" y="1" width="22" height="9" rx="1"  strokeWidth="2"/>
							<rect x="1" y="14" width="22" height="9" rx="1"  strokeWidth="2"/>
						</svg>
          </div>
          <div className={isGrid? style.active : style.cards} onClick={() => setIsGrid(true)}>
						<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
							<rect x="5" y="5" width="9" height="9" rx="1"  strokeWidth="2"/>
							<rect x="5" y="18" width="9" height="9" rx="1"  strokeWidth="2"/>
							<rect x="18" y="5" width="9" height="9" rx="1"  strokeWidth="2"/>
							<rect x="18" y="18" width="9" height="9" rx="1"  strokeWidth="2"/>
						</svg>
          </div>
        </div>
      </div>
      {isGrid ? (
        <div className={style.cardList}>
          {cards.map((card) => (
            <Card
              img={card.img}
              birthday={card.birthday}
              status={card.status}
              name={card.name}
              key={card.char_id}
              id={card.char_id}
            />
          ))}
        </div>
      ) : (
        <div className={style.cardListList}>
          {cards.map((card) => (
            <CardGrid
              img={card.img}
              birthday={card.birthday}
              status={card.status}
              name={card.name}
              key={card.char_id}
              id={card.char_id}
            />
          ))}
        </div>
      )}
    </div>
  );
};
export default CardList;
