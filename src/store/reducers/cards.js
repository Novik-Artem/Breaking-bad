import { v4 as uuidv4 } from "uuid";
import human from "../../assets/images/human.png";
const initialState = {
  cards: [
    {
      id: uuidv4(),
      name: "Андрей Панасюк",
      birthday: "23.11.2001",
      img: human,
      status: "живой",
    },
    {
      id: uuidv4(),
      name: "Андрей Панасюк",
      birthday: "23.11.2001",
      img: human,
      status: "живой",
    },
    {
      id: uuidv4(),
      name: "Андрей Панасюк",
      birthday: "23.11.2001",
      img: human,
      status: "живой",
    },
    {
      id: uuidv4(),
      name: "Андрей Панасюк",
      birthday: "23.11.2001",
      img: human,
      status: "живой",
    },
    {
      id: uuidv4(),
      name: "Андрей Панасюк",
      birthday: "23.11.2001",
      img: human,
      status: "живой",
    },
  ],
};
const card = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default card;
