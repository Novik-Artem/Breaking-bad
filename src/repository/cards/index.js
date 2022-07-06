import axios from "axios";
class Cards {
  getPersons = async (limit, offset, currentPage) => {
    const result = {
      value: null,
      error: null,
    };
    try {
      const response = await axios.get(
        "https://breakingbadapi.com/api/characters",
        {
          params: {
            limit,
						offset,
						currentPage
          },
        }
      );
      result.value = response.data;
    } catch (e) {
      result.error = e.message;
    }
    return result;
  };

  getPersonById = async (id) => {
    const result = {
      value: null,
      error: null,
    };
    try {
      const response = await axios.get(
        `https://breakingbadapi.com/api/characters/${id}`
      );
      result.value = response.data;
    } catch (e) {
      result.error = e.message;
    }
    return result;
	};
	
	getTotalCardsCount = async () => {
    const result = {
      value: null,
      error: null,
    };
    try {
      const response = await axios.get(
        "https://breakingbadapi.com/api/characters",
			);
			result.value = response.data.length;
    } catch (e) {
      result.error = e.message;
    }
    return result;
  };
}

export default new Cards();
