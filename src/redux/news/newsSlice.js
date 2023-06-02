import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import getNews from '../../services/news.service';

export const fetchNews = createAsyncThunk('fetch_news', async () => {
  const resp = await getNews();
  const data = resp.articles;
  return data;
});

const initialState = {
  news: [],
  singleNews: {},
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    oneNews: (state, action) => {
      const newsId = new Date(action.payload).getTime();
      const newSingleState = state.news.find((news) => {
        if (new Date(news.publishedAt).getTime() === newsId) {
          return news;
        }
        return false;
      });
      console.log(newSingleState, 'just add something to it');
      return {
        ...state,
        singleNews: newSingleState,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchNews.fulfilled, (state, action) => ({
      ...state,
      news: [...action.payload],
    }));
  },
});

export const { oneNews } = newsSlice.actions;
export default newsSlice.reducer;
