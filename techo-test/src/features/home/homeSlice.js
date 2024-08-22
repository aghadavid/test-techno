// features/home/homeSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchHomeData = createAsyncThunk(
    'home/fetchHomeData',
    async (_, { rejectWithValue, getState }) => {
        const state = getState();
        const token = state.auth.token;

        if (!token) {
            return rejectWithValue('No token available');
        }

        try {
            const response = await fetch('https://soal.staging.id/api/home', {
                method: 'GET',
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

const homeSlice = createSlice({
    name: 'home',
    initialState: {
        data: null,
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchHomeData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchHomeData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchHomeData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
});

export default homeSlice.reducer;
