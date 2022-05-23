import style from "./styles.module.scss";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.content}>
        <time className={style.year}>{new Date().getFullYear()}</time>
        <div className={style.name}>@Artem_Novik</div>
      </div>
    </footer>
  );
};

export default Footer;
