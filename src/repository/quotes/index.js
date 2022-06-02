import axios from "axios";
class Quote {
  getQuoteByName = async (name) => {
    const result = {
      value: null,
      error: null,
    };
    try {
      const response = await axios.get(
        `https://www.breakingbadapi.com/api/quote/random?author=${name}`
      );
      let temp = response.data;
      temp.length > 0
        ? (result.value = temp[0].quote)
        : (result.value = "Цитаты нет");


    } catch (e) {
      result.error = e.message;
    }
    return result;
  };
}
export default new Quote();
