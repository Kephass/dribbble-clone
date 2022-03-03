import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: [],
};

export const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    getPosts: (state, action) => {
      state.posts = [...action.payload];
    },
    increment: (state) => {
      state.posts += 1;
    },
    decrement: (state) => {
      state.posts -= 1;
    },
    incrementByAmount: (state, action) => {
      state.posts += action.payload;
    },
  },
});

export const { getPosts, increment, decrement, incrementByAmount } =
  listSlice.actions;

export default listSlice.reducer;
