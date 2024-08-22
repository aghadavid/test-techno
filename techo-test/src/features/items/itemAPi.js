import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Asynchronous action using createAsyncThunk
export const fetchItems = createAsyncThunk(
  'items/fetchItems',
  async () => {
    const response = await fetch('https://api.example.com/items');
    return response.json();
  }
);

// Create a slice
const itemsSlice = createSlice({
  name: 'items',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchItems.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { addItem } = itemsSlice.actions;

export default itemsSlice.reducer;
