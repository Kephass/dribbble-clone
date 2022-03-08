import { configureStore } from '@reduxjs/toolkit';
import listReducer from '@features/listSlice';

export const store = configureStore({
  reducer: {
    list: listReducer,
  },
});
