import style from "./styles.module.scss";

const Footer = () => {
  return (
		<footer className={style.footer}>
			<div className={style.content}>
				<div className={style.year}>2022</div>
				<div className={style.name}>@Artem_Novik</div>
      </div>
    </footer>
	);
};

export default Footer;

