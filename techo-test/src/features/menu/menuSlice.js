import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchMenuSlice = createAsyncThunk(
    'menu/fetchMenuSlice',
    async (_, { rejectWithValue, getState }) => {
        const state = getState();
        const token = state.auth.token;

        if (!token) {
            return rejectWithValue('No token available');
        }

        try {
            const response = await fetch('https://soal.staging.id/api/menu', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const menuSlice = createSlice({
    name: 'menu',
    initialState: {
        data: null,
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMenuSlice.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchMenuSlice.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchMenuSlice.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
});

export default menuSlice.reducer;
