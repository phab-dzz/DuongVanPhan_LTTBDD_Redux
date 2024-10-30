import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://6701579eb52042b542d782e5.mockapi.io/datadb';

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const selectAllTodos = (state) => state.todos.items;

export default todosSlice.reducer;
