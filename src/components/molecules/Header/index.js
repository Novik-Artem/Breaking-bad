import { Link } from "react-router-dom";
import style from "./styles.module.scss";
import logo from "../../../assets/images/logo.svg";
import burger from "../../../assets/icons/burger.png";
import { useLocation } from "react-router-dom";

const Header = () => {
	const params = useLocation();
	
  return (
		<header className={style.header}>
			<div className={style.content}>
				<Link to="/">
					<div className={style.logo}>
							<img src={logo} alt="logo_error" />
					</div>
				</Link>
					<Link to={"/cards"} className={ params.pathname === "/cards" ? style.activeLink : style.link}>
						<img src={burger} alt="burger_error" className={style.burger} />
						Каталог
					</Link>
      </div>
    </header>
	);
};

export default Header;

