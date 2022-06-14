import style from "./styles.module.scss";
import image from "../../../assets/images/main.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";

const MainPage = () => {
  return (
    <main className={style.main}>
      <LazyLoadImage src={image} alt="" className={style.image} />
    </main>
  );
};

export default MainPage;
