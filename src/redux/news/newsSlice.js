import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import getNews from "../../services/news.service";

export const fetchNews = createAsyncThunk("fetch_news", async () => {
  const resp = await getNews();
  const Data = resp.articles;
  return Data;
});

const initialState = {
  news: [],
  singleNews: {},
  // update: false,
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchNews.fulfilled, (state, action) => {
      console.log(action, "something new");
      return {
        ...state,
        news: [...action.payload],
      };
    });
  },
});

export default newsSlice.reducer;
