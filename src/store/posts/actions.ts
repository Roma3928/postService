import { createAsyncThunk } from '@reduxjs/toolkit';
import PostService from '../../api';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async (_, thunkAPI) => {
  try {
    return await PostService.getAll();
  } catch (e) {
    return thunkAPI.rejectWithValue(e);
  }
});

export const findPost = createAsyncThunk('posts/findPost', async (title: string, thunkAPI) => {
  try {
    return await PostService.getAll(title);
  } catch (e) {
    return thunkAPI.rejectWithValue(e);
  }
});
