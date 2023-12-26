import { createSlice } from '@reduxjs/toolkit';

const mainSlice = createSlice({
  name: 'main',
  initialState: {
    article: null,
    isLoggedIn: false,
    user: {
      email: '',
      token: '',
      username: '',
      bio: '',
      image: '',
    },
  },
  reducers: {
    setArticles(state, action) {
      state.articles = action.payload;
    },
    setArticlesCount(state, action) {
      state.articlesCount = action.payload;
    },
    setIsLoggedIn(state, action) {
      state.isLoggedIn = action.payload;
    },
    setUser(state, action) {
      state.user = action.payload;
    },
  },
});

export const { setIsLoggedIn, setUser } = mainSlice.actions; // Экспорт экшенов

export default mainSlice.reducer;
