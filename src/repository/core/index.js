import axios from "axios";
class Core {
  getPersons = async (limit = 10) => {
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
          },
        }
      );
      result.value = response.data;
    } catch (e) {
			result.error = e.message
    }
    return result;
  };
}

export default new Core();
