import style from "./styles.module.scss";
import searchIcon from "../../../assets/icons/search.svg";
import { useState } from "react";


const Search = ({ search }) => {
  let [value, setValue] = useState("");
	const submit = () => {
		
    search(value);
    setValue("");
  };

  return (
    <div className={style.search}>
      <input
        type="text"
        placeholder="поиск"
        className={style.input}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button disabled={!value} className={style.text} onClick={submit}>
        <img src={searchIcon} alt="" className={style.searchIcon} />
        Найти
      </button>
    </div>
  );
};
export default Search;
