import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './reducers';
import commonAPI from './commonAPI';

const store = configureStore({
  reducer: {
    rootReducer: rootReducer,
    [commonAPI.reducerPath]: commonAPI.reducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(commonAPI.middleware),
});

export default store;
