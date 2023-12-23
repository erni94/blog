import { createSlice } from '@reduxjs/toolkit';

const mainSlice = createSlice({
  name: 'main',
  initialState: {
    article: null,
  },
  reducers: {
    setArticles(state, action) {
      state.articles = action.payload;
    },
    setArticlesCount(state, action) {
      state.articlesCount = action.payload;
    },
    isLoggedIn(state, action) {
      state.isLoggedIn = action.payload;
    },
  },
});

export default mainSlice.reducer;
