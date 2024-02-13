import { createAsyncThunk } from '@reduxjs/toolkit';
import PostService from '../../api';

export const fetchPostItem = createAsyncThunk(
  'postItem/fetchPostItem',
  async (id: number, thunkAPI) => {
    try {
      return await PostService.getById(id);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  },
);
