import axios from "axios";
import api from "./api";

const baseURL =
  "https://newsapi.org/v2/everything?q=tesla&from=2023-05-01&sortBy=publishedAt&apiKey=7d6c2de756014f95822c31c2a8de94a0";
const getNews = async () => {
  try {
    const response = await axios.get(baseURL);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default getNews;
