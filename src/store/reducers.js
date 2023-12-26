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
      localStorage.setItem('isLoggedIn', JSON.stringify(action.payload));
    },
    setUser(state, action) {
      state.user = action.payload;
      localStorage.setItem('user', JSON.stringify(action.payload));
    },
    logOut(state) {
      state.user = {
        email: '',
        token: '',
        username: '',
        bio: '',
        image: '',
      };
      state.isLoggedIn = false;
      localStorage.clear();
      ;
    },
  },
});

export const { setIsLoggedIn, setUser, logOut } = mainSlice.actions; // Экспорт экшенов

export default mainSlice.reducer;
