import { configureStore } from '@reduxjs/toolkit';

import rootReducer, { setIsLoggedIn, setUser } from './reducers';
import commonAPI from './commonAPI';

const store = configureStore({
  reducer: {
    rootReducer: rootReducer,
    [commonAPI.reducerPath]: commonAPI.reducer,
  },
  devTools: false,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(commonAPI.middleware),
});

const isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'));

if (isLoggedIn) {
  const user = JSON.parse(localStorage.getItem('user'));
  store.dispatch(setIsLoggedIn(true));
  store.dispatch(setUser(user));
}

export default store;
