import { createSlice } from '@reduxjs/toolkit';
import { PostsInitalState } from './interface';
import { fetchPosts, findPost } from './actions';

const initialState: PostsInitalState = {
  posts: [],
  query: '',
  isLoading: false,
  error: false,
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setQuery(state, action) {
      state.query = action.payload;
    },
  },

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
      })
      .addCase(findPost.pending, (state) => {
        state.isLoading = true;
        state.posts = [];
      })
      .addCase(findPost.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.posts = payload;
      })
      .addCase(findPost.rejected, (state) => {
        state.isLoading = false;
        state.posts = [];
      });
  },
});

export const { setQuery } = postsSlice.actions;
export default postsSlice.reducer;
