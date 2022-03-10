import listReducer from '@features/listSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    list: listReducer,
  },
});
