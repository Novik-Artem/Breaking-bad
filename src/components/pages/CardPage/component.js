import { Link } from "react-router-dom";
import style from "./styles.module.scss";
import icon from "../../../assets/icons/arrow.svg";
import Header from "../../molecules/Header"

const CardPage = ({ card }) => {
	return (
		<div>
			<Header/>
			<div className={style.container}>
				<Link to="/cards" className={style.link}>
					<img src={icon} alt="icon_error" className={style.icon} />
					назад в каталог
				</Link>
				<div className={style.content}>
					<div className={style.image}>
						<img src={card.img} alt="img_error" />
					</div>
					<div className={style.info}>
						<div className={style.status}>{card.status}</div>
						<div className={style.name}>{card.name}</div>
						<div className={style.date}>
							<span>Дата рождения:</span>
							{card.birthday}
						</div>
						<div className={style.nickname}>
							<span>Ник-нейм:</span>
							{card.nickname}
						</div>
						<div className={style.quote}>
							<span>Цитата:</span> Lorem ipsum dolor sit amet, consectetur
							adipiscing elit. Non, aliquam laoreet vivamus sed. Diam fames mi,
							quam tellus cursus volutpat velit massa.
						</div>
					</div>
				</div>
			</div>
		</div>
  );
};

export default CardPage;
