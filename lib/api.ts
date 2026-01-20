import axios from "axios";

const API_URL = "https://newsapi.org/v2/top-headlines/sources";
const API_KEY = "0078f024448e44a88e05e6408bfdd08c";
const fetchData = async (params: any) => {
  const res = await axios.get(API_URL, {
    params: {
      apiKey: API_KEY,
      ...params,
    },
  });
  return res.data;
};

export default fetchData;
