import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // if you need to disable this for some non-serializable payloads
    }),
  devTools: __DEV__, // only in development
});

export default store;
