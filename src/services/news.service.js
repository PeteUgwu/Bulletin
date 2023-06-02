import api from "./api";

const getNews = async () => {
  try {
    const response = await api.get();
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default getNews;
