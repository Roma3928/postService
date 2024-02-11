import { createSlice } from '@reduxjs/toolkit';
import { PostsInitalState } from './interface';
import { fetchPosts } from './actions';

const initialState: PostsInitalState = {
  posts: [],
  isLoading: false,
  error: false,
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.isLoading = true;
        state.posts = [];
      })
      .addCase(fetchPosts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.posts = payload;
      })
      .addCase(fetchPosts.rejected, (state) => {
        state.isLoading = false;
        state.posts = [];
      });
  },
});

export default postsSlice.reducer;
