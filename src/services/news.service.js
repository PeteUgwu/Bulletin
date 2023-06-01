import axios from "axios";
import api from "./api";

const baseURL =
  "https://newsapi.org/v2/everything?q=tesla&from=2023-05-01&sortBy=publishedAt&apiKey=3121a6b3687140f396e020fc1ad481cd";
const getNews = async () => {
  try {
    const response = await axios.get(baseURL);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default getNews;
