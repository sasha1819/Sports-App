const axios = require("axios").default;
import { newsApiKey } from "../constants/keys";

const url = "https://newsapi.org/v2/top-headlines?";
export const getData = async (category) => {
  try {
    const query = `${url}category=${category}&country=il&apiKey=${newsApiKey}`;
    const res = await axios.get(query);

    return {
      data: res,
      isError: false,
    };
  } catch (error) {
    return {
      data: [],
      isError: true,
      error,
    };
  }
};
