import { createSlice } from '@reduxjs/toolkit';
import { fetchPostItem } from './actions';
import { Post } from '../posts/interface';

interface PostItemInitalState {
  post: Post;
  isLoading: boolean;
  error: boolean;
}

const initialState: PostItemInitalState = {
  post: { userId: null, id: null, title: '', body: '' },
  isLoading: false,
  error: false,
};

export const postItemSlice = createSlice({
  name: 'postItem',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchPostItem.pending, (state) => {
        state.isLoading = true;
        state.post = { userId: null, id: null, title: '', body: '' };
      })
      .addCase(fetchPostItem.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.post = payload;
      })
      .addCase(fetchPostItem.rejected, (state) => {
        state.isLoading = false;
        state.post = { userId: null, id: null, title: '', body: '' };
      });
  },
});

export default postItemSlice.reducer;
